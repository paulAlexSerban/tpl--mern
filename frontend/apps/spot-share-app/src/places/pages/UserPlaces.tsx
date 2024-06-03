import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useEffect, useState } from 'react';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { PlaceItemProps } from '../components/PlaceItem';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const UserPlaces = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const userId = useParams().uid;
    const [loadedPlaces, setLoadedPlaces] = useState<PlaceItemProps[]>([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(`${BACKEND_URL}/places/user/${userId}`);
                if (!responseData) {
                    return;
                }
                const { places } = responseData;
                setLoadedPlaces(places);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPlaces();
    }, [sendRequest, userId]);

    const placeDeletedHandler = (deletedPlaceId: string) => {
        setLoadedPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== deletedPlaceId));
    };

    return (
        <>
            {error && loadedPlaces.length !== 0 && <ErrorModal error={error} onClear={clearError} />}
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />}
        </>
    );
};

export default UserPlaces;
