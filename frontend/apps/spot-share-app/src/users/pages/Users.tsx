import { FC, useEffect, useState } from 'react';
import UserList from '../components/UserList';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

type User = {
    id: string;
    name: string;
    image: string;
    places: number;
};

const Users: FC = () => {
    const [loaderUsers, setLoaderUsers] = useState<User[] | null>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3000/api/users');
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                } else {
                    setLoaderUsers(responseData.users);
                    setIsLoading(false);
                }
            } catch (err) {
                const error = err as Error;
                setIsLoading(false);
                setError(error.message || 'Something went wrong, please try again.');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            {error && <ErrorModal error={error} onClear={() => setError(null)} />}
            <div>
                {isLoading && (
                    <div className="center">
                        <LoadingSpinner />
                    </div>
                )}
                {!isLoading && loaderUsers && <UserList users={loaderUsers} />}
            </div>
        </>
    );
};

export default Users;
