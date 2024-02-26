import { FC } from 'react';
import Modal from './UI/Modal';
import { useCartContext } from '../store/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input';
import Button from './UI/Button';
import { useUserProgressContext } from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';
const requestConfig = { method: 'POST', headers: { 'Content-Type': 'application/json' } };

const Checkout: FC = () => {
    const { items, clearCart } = useCartContext();
    const { progress, hideCheckout } = useUserProgressContext();
    const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData,
    } = useHttp<ResponseType>('http://localhost:4001/orders', requestConfig);

    const handleCloseCheckout = () => {
        hideCheckout();
    };

    const handleFinishCheckout = () => {
        hideCheckout();
        clearCart();
        clearData();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        const order = JSON.stringify({
            order: {
                items,
                total: cartTotal,
                customer: data,
            },
        });

        await sendRequest(order);
    };

    let actions = (
        <>
            <Button textOnly>Close</Button>
            <Button>Confirm</Button>
        </>
    );

    if (isSending) {
        actions = <p className="center">Sending order data...</p>;
    }

    if (data && !error) {
        return (
            <Modal open={progress === 'checkout'} onClose={handleFinishCheckout} className="checkout">
                <h2>Success!</h2>
                <p>Order sent successfully!</p>
                <p>We will get back to you with more details via email within a few minutes.</p>
                <div>
                    <Button onClick={handleFinishCheckout}>OK</Button>
                </div>
            </Modal>
        );
    }

    // Handling error and loading states can be done here

    return (
        <Modal open={progress === 'checkout'} onClose={handleCloseCheckout} className="checkout">
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" required id="name" />
                <Input label="Email" type="email" required id="email" />
                <Input label="Street" type="text" required id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" required id="postal-code" />
                    <Input label="City" type="text" required id="city" />
                </div>
                {error && <Error title="Failed to send order" message={error} />}
                <p className="modal-actions">{actions}</p>
            </form>
        </Modal>
    );
};

export default Checkout;
