import AuthForm from '../components/AuthForm';
import { ActionFunction, json, redirect } from 'react-router-dom';
const AuthenticationPage = () => {
    return <AuthForm />;
};

export default AuthenticationPage;

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;

export const action: ActionFunction = async ({ request }) => {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (!['login', 'signup'].includes(mode)) {
        throw json({ message: 'Invalid user input' }, { status: 422 });
    }

    const data = await request.formData();
    const authData = {
        email: data.get('email') as string,
        password: data.get('password') as string,
    };

    const response = await fetch(`${BACKEND_URL}/auth/${mode}`, {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Authentication failed' }, { status: 500 });
    }

    const responseData = await response.json();
    const token = responseData.token;

    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    // store token in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime.toISOString());

    return redirect('/');
};
