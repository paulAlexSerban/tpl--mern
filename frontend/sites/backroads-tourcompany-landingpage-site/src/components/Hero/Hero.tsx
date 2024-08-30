import { CSSProperties } from 'react';
import './Hero.scss';

import mainBgkImg from '@/assets/main.jpeg';

const Hero = () => {
    const style = { '--hero-bkg-img': `url(${mainBgkImg})` } as CSSProperties;
    return (
        <section className="hero" id="home" style={style}>
            <div className="hero-banner">
                <h1>continue exploring</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.</p>
                <a href="#tours" className="btn hero-btn">
                    explore tours
                </a>
            </div>
        </section>
    );
};

export default Hero;
