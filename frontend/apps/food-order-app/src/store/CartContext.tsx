import { createContext, ReactNode, useReducer, useContext } from 'react';
import { CartItem } from '../types';

type CartState = {
    items: CartItem[];
};

type CartContextValue = CartState & {
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}

type AddItemAction = {
    type: 'ADD_ITEM';
    item: CartItem;
};

type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    id: string;
};

type ClearCartAction = {
    type: 'CLEAR_CART';
};

export type CartAction = AddItemAction | RemoveItemAction | ClearCartAction;

const cartReducer = (state: CartState, action: CartAction) => {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        if (existingCartItemIndex !== -1) {
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };

            // replace the item in the array with the updated item
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return {
            items: updatedItems,
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        }

        if (existingItem.quantity > 1) {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    }

    if (action.type === 'CLEAR_CART') {
        return {
            items: [],
        };
    }

    return state;
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const addItemToCart = (item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', item: item });
    };

    const removeItemFromCart = (id: string) => {
        dispatch({ type: 'REMOVE_ITEM', id: id });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const ctxValue = {
        items: cartState.items,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart,
    };
    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>;
};

export default CartContext;
