import { FC, CSSProperties, ReactNode, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

type ModalOverlayProps = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    headerClass?: string;
    header?: string;
    onSubmit?: () => void;
    contentClass?: string;
    footerClass?: string;
    footer: ReactNode;
    onCancel?: () => void;
    ref: React.Ref<HTMLDivElement>;
};
const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
    ({ children, className, style, headerClass, header, onSubmit, contentClass, footerClass, footer }, ref) => {
        const content = (
            <div className={`modal ${className}`} style={style} ref={ref}>
                {header && (
                    <header className={`modal__header ${headerClass}`}>
                        <h2>{header}</h2>
                    </header>
                )}
                <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
                    <div className={`modal__content ${contentClass}`}>{children}</div>
                    <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
                </form>
            </div>
        );
        return createPortal(content, document.getElementById('modal-hook')!);
    }
);

type ModalProps = {
    children: ReactNode;
    show: boolean;
    onCancel: () => void;
    header?: string;
    footer: ReactNode;
    onSubmit?: () => void;
    contentClass?: string;
    footerClass?: string;
};

const Modal: FC<ModalProps> = (props) => {
    const nodeRef = useRef(null);
    return (
        <>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} nodeRef={nodeRef}>
                <ModalOverlay {...props} ref={nodeRef}>
                    {props.children}
                </ModalOverlay>
            </CSSTransition>
        </>
    );
};

export default Modal;
