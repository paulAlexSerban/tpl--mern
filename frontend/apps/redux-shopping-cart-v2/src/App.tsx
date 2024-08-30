import { useEffect } from 'react';
import Navbar from '@/components/NavBar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useReduxContext } from '@/store/hooks';
import { modalSelector, cartSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';
import { calculateTotals, getCartItems } from '@/store/slices/cart';

const App = () => {
    const { selector } = useReduxContext();
    const dispatch = useAppDispatch();
    const { isOpen } = selector(modalSelector);
    const { cartItems, isLoading } = selector(cartSelector);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [dispatch, cartItems]);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    if (isLoading) {
        return <h2 className="loading">Loading...</h2>;
    }

    return (
        <>
            <Navbar />
            <CartContainer />
            {isOpen && <Modal />}
        </>
    );
};

export default App;
