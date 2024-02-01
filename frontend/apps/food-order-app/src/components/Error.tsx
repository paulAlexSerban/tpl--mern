import { FC } from 'react';

type ErrorProps = {
    title: string;
    message: string;
};

const Error: FC<ErrorProps> = ({ title, message }) => {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default Error;
