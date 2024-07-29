import { services } from '@/data';
import Title from '@/components/Title/Title';

import Service from './Service';
import './Services.scss';

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="our" subTitle="services" />

            <div className="section-center services-center">
                {services.map((service) => {
                    return <Service {...service} key={service.id} />;
                })}
            </div>
        </section>
    );
};
export default Services;
