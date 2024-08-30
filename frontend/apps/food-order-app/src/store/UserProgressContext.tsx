import { createContext, ReactNode, useState, useContext } from 'react';

type UserProgressState = {
    progress: string;
};

type UserProgressValue = UserProgressState & {
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
};

export const UserProgressContext = createContext<UserProgressValue | null>(null);

export function useUserProgressContext() {
    const context = useContext(UserProgressContext);
    if (!context) {
        throw new Error('useUserProgressContext must be used within a UserProgressContextProvider');
    }
    return context;
}

export const UserProgressContextProvider = ({ children }: { children: ReactNode }) => {
    const [userProgress, setUserProgress] = useState('');
    const showCart = () => {
        setUserProgress('cart');
    };

    const hideCart = () => {
        setUserProgress('');
    };

    const showCheckout = () => {
        setUserProgress('checkout');
    };

    const hideCheckout = () => {
        setUserProgress('');
    };

    const contextValue: UserProgressValue = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return <UserProgressContext.Provider value={contextValue}>{children}</UserProgressContext.Provider>;
};
