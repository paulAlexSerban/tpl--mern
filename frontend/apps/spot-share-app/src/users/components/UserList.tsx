import { FC } from 'react';
import './UserList.scss';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
type UserListProps = {
    users: any[];
};

const UserList: FC<UserListProps> = ({ users }) => {
    console.log(users);
    if (users.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places.length}
                />
            ))}
        </ul>
    );
};

export default UserList;
