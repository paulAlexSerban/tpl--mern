import { useReduxContext } from '@/store/hooks';
import { clearCart } from '@/store/slices/cart';
import { closeModal } from '@/store/slices/modal';

const Modal = () => {
    const { dispatch } = useReduxContext();

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button type="button" className="btn confirm-btn" onClick={handleClearCart}>
                        confirm
                    </button>
                    <button type="button" className="btn clear-btn" onClick={handleCloseModal}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;
