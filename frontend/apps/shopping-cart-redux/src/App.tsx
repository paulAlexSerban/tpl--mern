import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { RootState } from './store/index';

function App() {
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
