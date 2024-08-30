import { FC, useEffect, useState } from 'react';
import UserList from '../components/UserList';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook';
type User = {
    id: string;
    name: string;
    image: string;
    places: number;
};

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const Users: FC = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loaderUsers, setLoaderUsers] = useState<User[] | null>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(`${BACKEND_URL}/users`);
                if (!responseData) {
                    return;
                }
                setLoaderUsers(responseData.users);
            } catch (err) {
                const error = err as Error;
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            {error && <ErrorModal error={error} onClear={clearError} />}
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
