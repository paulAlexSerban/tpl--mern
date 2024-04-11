import MainNavigation from '../components/MainNavigation';
// import { useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    // const navigation = useNavigation();
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
