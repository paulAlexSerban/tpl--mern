import { redirect, ActionFunction } from 'react-router-dom';

export const action: ActionFunction = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return redirect('/');
};
