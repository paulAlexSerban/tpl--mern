import { FC, ReactNode } from 'react';
import './SideDrawer.scss';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

type SideDrawerProps = {
    show: boolean;
    children: ReactNode;
    onClick: () => void;
};

const SideDrawer: FC<SideDrawerProps> = ({ show, onClick, children }) => {
    const content = (
        <CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={onClick}>
                {children}
            </aside>
        </CSSTransition>
    );

    return createPortal(content, document.getElementById('drawer-hook')!);
};

export default SideDrawer;
