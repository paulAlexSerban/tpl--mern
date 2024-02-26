import { useRef, useState, useCallback } from 'react';

import Places, { Place } from './components/Places.tsx';
import Modal from './components/Modal.tsx';
import DeleteConfirmation from './components/DeleteConfirmation.tsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.tsx';
import { putData, getData } from './util/http.ts';
import ErrorCmp from './components/Error.tsx';
import useFetch from './hooks/useFetch.ts';

function App() {
    const selectedPlace = useRef<Place | null>();
    const {
        isFetching,
        fetchedData: userPlaces,
        error: fetchError,
        setFetchedData: setUserPlaces,
        setError: setErrorUpdatingPlaces,
    } = useFetch<Place[]>(getData, 'http://localhost:4001/user-places', []);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function handleStartRemovePlace(place: Place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    const handleSelectPlace = async (selectedPlace: Place) => {
        // the practice used here is called optimistic updating
        // we update the UI first and then send the request to the server
        setUserPlaces((prevPickedPlaces) => {
            // Ensure prevPickedPlaces is not null
            const updatedPickedPlaces = prevPickedPlaces ? [...prevPickedPlaces] : [];
            // Check if the place is already in the list
            if (updatedPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return updatedPickedPlaces;
            }
            // Add the new place
            console.log([selectedPlace, ...updatedPickedPlaces]);
            return [selectedPlace, ...updatedPickedPlaces];
        });

        // this won't work because the state update is scheduled and not executed immediately
        // putData(userPlaces);
        try {
            if (!userPlaces) {
                return;
            }
            if (userPlaces.some((place) => place.id === selectedPlace.id)) {
                return;
            }
            // this will work because we use the updater function form of setState
            await putData([selectedPlace, ...userPlaces]);
        } catch {
            setErrorUpdatingPlaces({
                message: 'Failed to update your places. Please try again later.',
            });
            setUserPlaces(userPlaces);
            // we don't need to do anything here because the error is already handled in the putData() function
        }
    };

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            // the practice used here is called optimistic updating instead of using a loading indicator
            // we update the UI first and then send the request to the server
            setUserPlaces((prevPickedPlaces) => {
                if (!prevPickedPlaces) {
                    return [];
                }
                return prevPickedPlaces.filter((place) => {
                    if (selectedPlace.current) {
                        return place.id !== selectedPlace.current.id;
                    }
                });
            });

            try {
                const filteredPlaces = userPlaces
                    ? userPlaces.filter((place) => {
                          if (selectedPlace.current) {
                              return place.id !== selectedPlace.current.id;
                          }
                      })
                    : [];
                await putData(filteredPlaces);
            } catch {
                setUserPlaces(userPlaces);
                setErrorUpdatingPlaces({
                    message: 'Failed to update your places. Please try again later.',
                });
                // we don't need to do anything here because the error is already handled in the putData() function
            }

            setModalIsOpen(false);
        },
        [userPlaces]
    );

    const handleError = () => {
        setErrorUpdatingPlaces(null);
    };

    return (
        <>
            <Modal open={!!fetchError} onClose={handleError}>
                {fetchError && (
                    <ErrorCmp
                        title="Failed to update your places"
                        message={fetchError.message}
                        onConfirm={handleError}
                    />
                )}
            </Modal>

            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>place-picker</h1>
                <p>Create your personal collection of places you would like to visit or you have visited.</p>
            </header>
            <main>
                {userPlaces && (
                    <Places
                        title="I'd like to visit ..."
                        fallbackText="Select the places you would like to visit below."
                        places={userPlaces}
                        onSelectPlace={handleStartRemovePlace}
                        loadingText="Fetching your places..."
                        isLoading={isFetching}
                    />
                )}

                <AvailablePlaces onSelectPlace={handleSelectPlace} />
            </main>
        </>
    );
}

export default App;
