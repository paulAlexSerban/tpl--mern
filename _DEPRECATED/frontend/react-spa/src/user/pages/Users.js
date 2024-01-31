import React from 'react';
import UsersList from '../components/UsersList';

const USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        image: 'https://images.unsplash.com/photo-1680798790227-57f763866b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3047&q=80',
        places: 3,
    },
];

const Users = () => {
    return <UsersList items={USERS} />;
};

export default Users;
