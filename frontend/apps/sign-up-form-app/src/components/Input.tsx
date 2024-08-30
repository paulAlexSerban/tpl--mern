import { FC, ComponentPropsWithoutRef } from 'react';

type InputProps = {
    label: string;
    id: string;
    error?: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ label, id, error, ...props }) => {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input {...props} id={id} />
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
    );
};

export default Input;
