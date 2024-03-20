import { FC } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.scss';

type BackdropProps = {
    onClick: () => void;
};

const Backdrop: FC<BackdropProps> = ({ onClick }) => {
    const content = <div className="backdrop" onClick={onClick}></div>;

    return ReactDOM.createPortal(content, document.getElementById('backdrop-hook')!);
};

export default Backdrop;
