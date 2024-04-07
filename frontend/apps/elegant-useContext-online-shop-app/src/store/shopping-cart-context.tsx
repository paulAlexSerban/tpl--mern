import { useState, useContext, createContext, type ReactNode } from 'react';
import { type CartItem } from '../components/Cart.tsx';
import { DUMMY_PRODUCTS } from '../dummy-products.ts';

type CartState = {
    items: CartItem[];
};

type CartContextType = CartState & {
    addItem: (id: string) => void;
    updateItemQuantity: (id: string, amount: number) => void;
};

type CartContextProviderProps = {
    children: ReactNode;
};

export const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => {},
    updateItemQuantity: () => {},
});

/**
 * useCartContext is a custom hook that can be used to access the CartContext
 * from any component that is a child of the CartContextProvider
 * This way, we don't have to use useContext(CartContext) in every component that needs access to the CartContext
 */
export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}

export default function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, setCartState] = useState<CartState>({
        items: [],
    });

    function handleAddItemToCart(id: string) {
        setCartState((prevCartState) => {
            const updatedItems = [...prevCartState.items];

            const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === id);
                if (!product) {
                    return prevCartState;
                }
                updatedItems.push({
                    id: id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                items: updatedItems,
            };
        });
    }

    function handleUpdateCartItemQuantity(productId: string, amount: number) {
        setCartState((prevCartState) => {
            const updatedItems = [...prevCartState.items];
            const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    const cartContext: CartContextType = {
        items: cartState.items,
        addItem: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    /**
     * WARNING:
     * If Error: Cannot find context 'CartContext' in 'CartContextProvider'
     * make sure the file extension is .tsx, NOT .ts
     */
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
