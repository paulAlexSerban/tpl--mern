import { FC, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
};

const Modal: FC<ModalProps> = ({ open, children, onClose }) => {
    const dialog = useRef<HTMLDialogElement>(null);

    // using the useEffect hook to open/close the dialog element by implementing a declarative approach
    useEffect(() => {
        if (open) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById('modal')!
    );
};

export default Modal;
