import { type FC, type ReactNode, forwardRef, useImperativeHandle, useRef, Ref } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
type ModalProps = {
    children: ReactNode;
    ref: Ref<ModalHandle>;
    buttonCaption: string;
};

export type ModalHandle = {
    open: () => void;
};

const Modal: FC<ModalProps> = forwardRef<ModalHandle, ModalProps>(({ children, buttonCaption }, ref) => {
    const modalRoot = document.getElementById('modal-root')!;
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current!.showModal();
        },
    }));

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        modalRoot
    );
});

export default Modal;
