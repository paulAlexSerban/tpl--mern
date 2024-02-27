import { FC } from 'react';
import UserList from '../components/UserList';

const Users: FC = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            places: 3,
        },
        {
            id: 'u2',
            name: 'Manuel Lorenz',
            image: 'https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            places: 2,
        },
        {
            id: 'u3',
            name: 'Julie Jones',
            image: 'https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            places: 1,
        },
    ];
    return (
        <div>
            <UserList users={USERS} />
        </div>
    );
};

export default Users;
