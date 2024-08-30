import Counter from './components/Counter.tsx';
import Header from './components/Header.tsx';
import Auth from './components/Auth.tsx';
import UserProfile from './components/UserProfile.tsx';

import { useSelector } from 'react-redux';
import { RootState } from './store/index.ts';

function App() {
    const { isAuthenticated } = useSelector((state: RootState) => state.authentication);
    return (
        <>
            <Header />
            {!isAuthenticated && <Auth />}
            {isAuthenticated && <UserProfile />}
            {isAuthenticated && <Counter />}
        </>
    );
}

export default App;
