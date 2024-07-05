import { useContext, useReducer, useEffect, createContext, ReactNode } from 'react';
import reducer from './reducer';
import { TCartContextType, TCartItem } from '../types.d';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';
import { getTotals } from '../utils';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext<TCartContextType | undefined>(undefined);

const initialState = {
    loading: false,
    cart: new Map<string, TCartItem>(),
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const remove = (id: TCartItem['id']) => {
        dispatch({ type: REMOVE, payload: { id } });
    };
    const increase = (id: TCartItem['id']) => {
        dispatch({ type: INCREASE, payload: { id } });
    };
    const decrease = (id: TCartItem['id']) => {
        dispatch({ type: DECREASE, payload: { id } });
    };
    const fetchData = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                totalAmount: getTotals(state.cart).totalAmount,
                totalCost: getTotals(state.cart).totalCost,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = (): TCartContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
};
