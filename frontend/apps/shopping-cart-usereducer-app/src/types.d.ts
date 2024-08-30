export type TCartState = {
    loading: boolean;
    cart: Map<string, TCartItem>;
};

export type TCartAction = {
    type: 'CLEAR_CART' | 'REMOVE' | 'INCREASE' | 'DECREASE' | 'LOADING' | 'DISPLAY_ITEMS';
    payload?: any;
};

export type TCartItem = {
    id: string;
    title: string;
    price: number;
    img: string;
    amount: number;
};

export type TCartContextType = {
    loading: boolean;
    cart: Map<string, TCartItem>;
    clearCart: () => void;
    remove: (id: string) => void;
    increase: (id: string) => void;
    decrease: (id: string) => void;
    totalAmount: number;
    totalCost: number;
};
