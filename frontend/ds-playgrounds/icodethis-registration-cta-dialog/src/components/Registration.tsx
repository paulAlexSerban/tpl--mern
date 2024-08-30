import { type FC } from 'react';
import './registration.scss';
type RegistrationProps = {
    layout: 'centered' | 'horizontal';
    buttonStyle: 'primary' | 'secondary';
    label: string;
};

const Registration: FC<RegistrationProps> = ({ layout = 'centered', buttonStyle = 'primary', label }) => {
    const cssClasses = ['registration__base', `registration__base--${layout}`].join(' ');
    const btnClasses = ['registration__button', `registration__button--${buttonStyle}`].join(' ');
    return (
        <section className={cssClasses}>
            <div className="registration__content">
                <h2 className="registration__heading">Registration Open!</h2>
                <p className="registration__period">2018 - 2019</p>
                <p className="registration__text">
                    Register and upload your design today to know how good your design is: get a complementary
                    preliminary score.
                </p>
            </div>
            <div className="registration__button-container">
                <button className={btnClasses} type="button">
                    {label.toUpperCase()}
                </button>
            </div>
        </section>
    );
};

export default Registration;
