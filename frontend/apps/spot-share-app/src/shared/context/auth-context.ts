import { createContext } from 'react';

type AuthContextType = {
    isLoggedIn: boolean;
    userId: string | null;
    login: (uid: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    userId: null,
    login: () => {},
    logout: () => {},
});
