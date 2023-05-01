import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Routes>
                    <Route path="/" element={<Users />} exact />
                    <Route path="/:userId/places" element={<UserPlaces />} />
                    <Route path="/places/new" element={<NewPlace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/places/:placeId" element={<UpdatePlace />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
