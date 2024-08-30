import { useCallback, useEffect, useState } from 'react';

let logoutTimer: ReturnType<typeof setTimeout>;

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [tokenExpirationDate, setTokenExpirationDate] = useState<Date | null>(null);

    const login = useCallback((uid: string, token: string, expirationDate?: Date) => {
        setUserId(uid);
        setToken(token);
        const loginTokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // 1 hour
        setTokenExpirationDate(loginTokenExpirationDate);
        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token,
                expiration: loginTokenExpirationDate.toISOString(), // Store expiration date as ISO string to avoid issues with JSON.parse
            })
        );
    }, []);

    const logout = useCallback(() => {
        setUserId(null);
        setToken(null);
        setTokenExpirationDate(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData') || '{}');
        const date = new Date();
        const expirationDate = new Date(storedData.expiration);
        if (storedData.userId && storedData.token && expirationDate > date) {
            login(storedData.userId, storedData.token, expirationDate);
        }
    }, []);

    return { token, login, logout, userId };
};
