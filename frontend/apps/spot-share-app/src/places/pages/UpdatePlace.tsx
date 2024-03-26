import { useParams, useNavigate } from 'react-router-dom';
import './PlaceForm.scss';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { FC, FormEvent, useEffect, useState, useContext } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { AuthContext } from '../../shared/context/auth-context';

type Place = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
    creator: string;
};

const UpdatePlace: FC = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { userId, token } = auth;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const pid = useParams().pid;
    const [loadedPlace, setLoadedPlace] = useState<Place>();
    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        true
    );

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3000/api/places/${pid}`);
                if(responseData) {
                    setLoadedPlace(responseData.place);
                    setFormData(
                        {
                            title: {
                                value: responseData.place.title,
                                isValid: true,
                            },
                            description: {
                                value: responseData.place.description,
                                isValid: true,
                            },
                        },
                        true
                    );
                }

            } catch (err) {
                console.error(err);
            }
        };
        fetchPlace();
    }, [sendRequest, pid]);

    if (isLoading) {
        return (
            <div className="center">
                <Card>
                    <LoadingSpinner />
                </Card>
            </div>
        );
    }

    if (!loadedPlace && !error) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        );
    }

    const placeSubmitHandler = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await sendRequest(
                `http://localhost:3000/api/places/${pid}`,
                'PATCH',
                JSON.stringify({
                    title: formState.inputs.title.value,
                    description: formState.inputs.description.value,
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            );
            navigate(`/${userId}/places`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {error && <ErrorModal error={error} onClear={clearError} />}
            {!isLoading && loadedPlace && (
                <form className="place-form" onSubmit={placeSubmitHandler}>
                    <Input
                        id="title"
                        element="input"
                        type="text"
                        label="Title"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid title."
                        onInput={inputHandler}
                        value={loadedPlace.title}
                        valid={true}
                    />
                    <Input
                        id="description"
                        element="textarea"
                        label="Description"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid description (min. 5 characters)."
                        onInput={inputHandler}
                        value={loadedPlace.description}
                        valid={true}
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                        UPDATE PLACE
                    </Button>
                </form>
            )}
        </>
    );
};

export default UpdatePlace;
