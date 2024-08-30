import { FC } from 'react';
import Places, { Place } from './Places.tsx';
import ErrorCmp from './Error.tsx';
import { sortPlacesByDistance } from '../util/loc.ts';
import { getData } from '../util/http.ts';
import useFetch from '../hooks/useFetch.ts';

type AvailablePlacesProps = {
    onSelectPlace: (place: Place) => void;
};

const fetchSortedPlaces = async (url: string) => {
    const places = await getData(url);
    return new Promise<Place[]>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
                resolve(sortedPlaces);
            },
            (error) => {
                reject(error);
            }
        );
    });
};

const AvailablePlaces: FC<AvailablePlacesProps> = ({ onSelectPlace }) => {
    const {
        isFetching,
        fetchedData: availablePlaces,
        error,
        setError,
    } = useFetch<Place[]>(fetchSortedPlaces, 'http://localhost:4001/places', []);

    if (error) {
        return (
            <ErrorCmp
                title="Failed to fetch places"
                message={error.message}
                onConfirm={() => {
                    setError(null);
                }}
            />
        );
    }
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            loadingText="Fetching place data..."
            isLoading={isFetching}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
};

export default AvailablePlaces;
