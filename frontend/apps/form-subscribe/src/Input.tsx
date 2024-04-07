import { type FC, forwardRef, type Ref } from 'react';

type InputProps = {
    label: string;
    ref: Ref<HTMLInputElement>;
    type: string;
};

const Input: FC<InputProps> = forwardRef(({ label, ...props }, ref) => {
    // Todo: Accept forwarded ref and "connect" it to the <input> element
    return (
        <p className="control">
            <label>{label}</label>
            <input {...props} ref={ref} />
        </p>
    );
});

export default Input;
