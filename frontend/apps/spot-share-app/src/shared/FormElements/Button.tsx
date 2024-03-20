import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

type ButtonProps = {
    href?: string;
    to?: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    inverse?: boolean;
    danger?: boolean;
    children: ReactNode;
};

const Button: FC<ButtonProps> = ({ href, size, inverse, danger, children, to, type, onClick, disabled }) => {
    if (href) {
        return (
            <a
                className={`button button--${size || 'default'} ${inverse && 'button--inverse'} ${danger && 'button--danger'}`}
                href={href}
            >
                {children}
            </a>
        );
    }
    if (to) {
        return (
            <Link
                to={to}
                className={`button button--${size || 'default'} ${
                    inverse && 'button--inverse'
                } ${danger && 'button--danger'}`}
            >
                {children}
            </Link>
        );
    }
    return (
        <button
            className={`button button--${size || 'default'} ${
                inverse && 'button--inverse'
            } ${danger && 'button--danger'}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
