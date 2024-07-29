import BaseLayout from '@/layout/Base';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Tours from '@/components/Tours/Tours';

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
