import React, { FC } from 'react';

import './Button.css';

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ type, children }) => {
    return (
        <button className="button" type={type}>
            {children}
        </button>
    );
};

export default Button;
