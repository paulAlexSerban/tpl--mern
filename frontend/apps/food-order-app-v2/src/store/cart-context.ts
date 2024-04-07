import React from 'react';

type CartItem = {
    id: string;
    name: string;
    amount: number;
    price: number;
};

export type CartContextType = {
    items: CartItem[];
    totalAmount: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    orderItems: () => void;
};

const CartContext = React.createContext<CartContextType>({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    orderItems: () => {},
});

export default CartContext;
