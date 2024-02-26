import { FC, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    onClose: (() => void) | undefined;
    className?: string;
};

const Modal: FC<ModalProps> = ({ open, children, onClose, className }) => {
    const dialog = useRef<HTMLDialogElement>(null);
    // using the useEffect hook to open/close the dialog element by implementing a declarative approach
    useEffect(() => {
        // this method is recommended by the react docs in order to avoid cases where dialog.current has changed
        // it is recommended to lock-in the value of dialog.current by using a variable
        const modal = dialog.current;
        if (open) {
            modal?.showModal();
        }
        return () => modal?.close();
    }, [open]);
    return createPortal(
        <dialog className={`modal ${className && className}`} ref={dialog} onClose={onClose}>
            {/* 
                conditional rendering of the children prop so children functions are not called when the modal is closed
            */}
            {open ? children : null}
        </dialog>,
        document.getElementById('modal')!
    );
};

export default Modal;
