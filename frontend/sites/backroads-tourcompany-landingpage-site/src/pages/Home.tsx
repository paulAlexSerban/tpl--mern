import BaseLayout from '../layout/Base';

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Tours from '../components/Tours';

const HomePage = () => {
    return (
        <>
            <BaseLayout>
                <Hero />
                <About />
                <Services />
                <Tours />
            </BaseLayout>
        </>
    );
};

export default HomePage;
