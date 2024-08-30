import { useState, FC } from 'react';

type FormProps = {
    addColor: (color: string) => void;
};

const Form: FC<FormProps> = ({ addColor }) => {
    const [color, setColor] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addColor(color);
    };

    return (
        <section className="container">
            <h4>color generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />
                <button className="btn" type="submit" style={{ background: color }}>
                    submit
                </button>
            </form>
        </section>
    );
};
export default Form;
