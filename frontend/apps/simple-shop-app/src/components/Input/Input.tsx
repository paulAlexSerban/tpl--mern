import { FC, ComponentPropsWithoutRef } from 'react';

import './Input.css';

type InputProps = {
    step?: number;
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, step, ...props }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input id={id} step={step} {...props} />
        </div>
    );
};

export default Input;
