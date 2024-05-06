import { useEffect } from 'react';
import MainNavigation from '../components/MainNavigation';
// import { useNavigation } from 'react-router-dom';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getTokenDuration } from '../util/auth';
const RootLayout = () => {
    // const navigation = useNavigation();
    const token = useLoaderData() as { token: string } | null;
    const submit = useSubmit();
    useEffect(() => {
        if (!token) {
            return;
        }
        if (token.token === 'EXPIRED') {
            submit(null, { method: 'POST', action: '/logout' });
            return;
        }

        const tokenDuration = getTokenDuration();

        if (!tokenDuration) {
            return;
        }

        console.log('Token duration:', tokenDuration);

        setTimeout(() => {
            submit(null, { method: 'POST', action: '/logout' });
        }, tokenDuration);
    }, [token, submit]);
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading ... </p>} */}
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
