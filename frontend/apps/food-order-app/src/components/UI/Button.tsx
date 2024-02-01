import { type FC, ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    textOnly?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Button: FC<ButtonProps> = ({ children, textOnly, className, ...props }) => {
    const cssClasses = (textOnly ? 'text-button' : 'button') + (className ? ` ${className}` : '');
    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
