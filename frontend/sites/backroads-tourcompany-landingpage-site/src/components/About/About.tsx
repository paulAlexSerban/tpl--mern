import aboutImage from '@/assets/about.jpeg';
import './About.scss';

import Title from '@/components/Title/Title';

const About = () => {
    return (
        <section className="section" id="about">
            <Title title="about" subTitle="us" />

            <div className="section-center aboutCenter">
                <div className="aboutImg">
                    <img src={aboutImage} className="aboutPhoto" alt="awesome beach" />
                </div>
                <article className="aboutInfo">
                    <h3>explore the difference</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque
                        temporibus explicabo dolorum sapiente odio unde dolor?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque
                        temporibus explicabo dolorum sapiente odio unde dolor?
                    </p>
                    <a href="#" className="btn">
                        read more
                    </a>
                </article>
            </div>
        </section>
    );
};

export default About;
