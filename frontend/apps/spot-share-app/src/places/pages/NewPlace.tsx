import { FC, FormEvent, useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './PlaceForm.scss';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const NewPlace: FC = () => {
    const navigate = useNavigate();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const { userId, token } = auth;
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            address: {
                value: '',
                isValid: false,
            },
            image: {
                value: null,
                isValid: false,
            },
        },
        false
    );

    const placeSubmitHandler = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', formState.inputs.title.value as string);
            formData.append('description', formState.inputs.description.value as string);
            formData.append('address', formState.inputs.address.value as string);
            formData.append('image', formState.inputs.image.value as File);
            await sendRequest(`${BACKEND_URL}/places`, 'POST', formData, {
                Authorization: `Bearer ${token}`,
            });
            navigate(`/${userId}/places`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {error && <ErrorModal error={error} onClear={clearError} />}
            <form className="place-form" onSubmit={placeSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
                <Input
                    element="input"
                    id="title"
                    type="text"
                    label="Title"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid title (at least 5 characters)."
                    onInput={inputHandler}
                />
                <Input
                    element="textarea"
                    id="description"
                    label="Description"
                    rows={5}
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid description (at least 5 characters)."
                    onInput={inputHandler}
                />
                <Input
                    element="input"
                    id="address"
                    type="text"
                    label="Address"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid address."
                    onInput={inputHandler}
                />
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler as any}
                    errorText="Please upload an image of the place."
                />
                <Button type="submit" disabled={!formState.isValid}>
                    ADD PLACE
                </Button>
            </form>
        </>
    );
};

export default NewPlace;
