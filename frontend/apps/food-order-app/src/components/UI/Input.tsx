import { FC, ComponentPropsWithoutRef } from 'react';

type InputProps = {
    label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ id, label, ...props }) => {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input name={id} {...props} />
        </div>
    );
};

export default Input;
