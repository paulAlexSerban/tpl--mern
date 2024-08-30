import { FC } from 'react';
import './LoadingSpinner.scss';

type LoadingSpinnerProps = {
    asOverlay?: boolean;
};

const LoadingSpinner: FC<LoadingSpinnerProps> = (props) => {
    return (
        <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default LoadingSpinner;
