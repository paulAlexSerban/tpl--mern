import Header from './components/Header';
import Shop from './components/Shop';
import CartContextProvider from './store/shopping-cart-context';
import { CartItem } from './components/Cart';

export type ShoppingCart = {
    items: CartItem[];
};

const App = () => {
    return (
        <CartContextProvider>
            <Header />
            <Shop />
        </CartContextProvider>
    );
};

export default App;
