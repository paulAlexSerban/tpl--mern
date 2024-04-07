import { ButtonHTMLAttributes, ReactNode } from 'react';

import { type FC, useState, type ChangeEvent, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
    return <input {...props} />;
};

type CharCountInputProps = InputProps & {
    onCharacterCountChange?: (count: number) => void; // Optional additional prop
};

const CharCountInput: FC<CharCountInputProps> = ({ onCharacterCountChange, ...rest }) => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        if (onCharacterCountChange) {
            onCharacterCountChange(e.target.value.length);
        }
    };

    return (
        <div>
            <Input value={input} onChange={handleInputChange} {...rest} />
            <span>Char count: {input.length}</span>
        </div>
    );
};
interface IDangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    // Your extra props if you have
}

const DangerButton = ({ children, ...props }: IDangerButtonProps) => {
    return (
        <button {...props} className="danger">
            {children}
        </button>
    );
};

const LSP = () => {
    return (
        <>
            <div>
                <h2>Danger Button</h2>
                <DangerButton>Danger Button</DangerButton>
            </div>
            <div>
                <h2>Input & Char Count Input</h2>
                <Input />
                <CharCountInput />
            </div>
        </>
    );
};

export default LSP;
