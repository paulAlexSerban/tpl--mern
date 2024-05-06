import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
    const storedExpirationTime = localStorage.getItem('expirationTime') as string;
    if (!storedExpirationTime) {
        return null;
    }
    const expirationTime = new Date(storedExpirationTime);
    const now = new Date();
    const duration = expirationTime.getTime() - now.getTime();
    return duration;
};

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    const tokenDuration = getTokenDuration();

    if (!token) {
        return null;
    }

    if (tokenDuration && tokenDuration < 0) {
        return 'EXPIRED';
    } else {
        return token;
    }
};

export const tokenLoader = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        return { token };
    }
    return null;
};

export const checkAuthLoader = async () => {
    const token = getAuthToken();
    if (!token) {
        return redirect('/auth?mode=login');
    }

    return null;
};
