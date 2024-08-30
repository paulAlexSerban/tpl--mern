import { useContext, createContext, type ReactNode, type FC, useReducer } from 'react';
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

type AddToShoppingCartAction = { type: 'ADD'; payload: string };
type RemoveFromShoppingCartAction = { type: 'UPDATE'; payload: { productId: string; amount: number } };

type ShoppingCartAction = AddToShoppingCartAction | RemoveFromShoppingCartAction;

const shoppingCartReducer = (state: CartState, action: ShoppingCartAction) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === action.payload);
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            if (!product) {
                return state;
            }
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    if (action.type === 'UPDATE') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);
        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };
        updatedItem.quantity += action.payload.amount;
        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    return state;
};

type ShoppingCartReducer = (state: CartState, action: ShoppingCartAction) => CartState;

export const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
    const [shoppingCartState, shoppingCartDispatch] = useReducer<ShoppingCartReducer>(shoppingCartReducer, {
        items: [],
    });

    function handleAddItemToCart(id: string) {
        shoppingCartDispatch({ type: 'ADD', payload: id });
    }

    function handleUpdateCartItemQuantity(productId: string, amount: number) {
        shoppingCartDispatch({
            type: 'UPDATE',
            payload: {
                productId,
                amount,
            },
        });
    }

    const cartContext: CartContextType = {
        items: shoppingCartState.items,
        addItem: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
    };

    /**
     * WARNING:
     * If Error: Cannot find context 'CartContext' in 'CartContextProvider'
     * make sure the file extension is .tsx, NOT .ts
     */
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
