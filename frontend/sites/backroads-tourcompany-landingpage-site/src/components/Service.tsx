import { FC } from 'react';

type ServiceProps = {
    icon: string;
    title: string;
    text: string;
};

const Service: FC<ServiceProps> = ({ icon, title, text }) => {
    return (
        <article className="service">
            <span className="service-icon">
                <i className={icon}></i>
            </span>
            <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
            </div>
        </article>
    );
};
export default Service;
