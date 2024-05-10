import { FC } from 'react';

type TitleProps = {
    text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
    return (
        <div className="title">
            <h2>{text}</h2>
            <div className="title-underline"></div>
        </div>
    );
};
export default Title;
