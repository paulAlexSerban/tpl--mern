export type CartItem = {
    id: string;
    title: string;
    price: number;
    img: string;
    amount: number;
};

export type CartState = {
    cartItems: CartItem[];
    amount: number;
    total: number;
    isLoading: boolean;
};

export type ModalState = {
    isOpen: boolean;
};
