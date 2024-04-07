import { type FC, useReducer } from 'react';

import CartContext, { CartContextType } from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

type CartItem = {
    id: string;
    name: string;
    amount: number;
    price: number;
};

type CartState = {
    items: CartItem[];
    totalAmount: number;
};

type CartAction = {
    type: 'ADD' | 'REMOVE';
    item?: CartItem;
    id?: string;
};

type CartReducer = (state: CartState, action: CartAction) => CartState;

const cartReducer: CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item!.price * action.item!.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item!.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item!.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item!);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id!);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id!);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

type CartProviderProps = {
    children: React.ReactNode;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: CartItem) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const orderItems = () => {
        console.log('Ordering...');
    };

    const cartContext: CartContextType = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        orderItems,
    };

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
