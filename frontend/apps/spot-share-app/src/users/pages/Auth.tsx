import { FormEvent, useState, useContext } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './Auth.scss';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const Auth = () => {
    const auth = useContext(AuthContext);
    const { login } = auth;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const authSubmitHandler = async (event: FormEvent) => {
        event.preventDefault();

        if (isLogin) {
            try {
                const responseData = await sendRequest(
                    `${BACKEND_URL}/users/login`,
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );
                const { userId, token } = responseData;
                login(userId, token);
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                const formData = new FormData();
                formData.append('email', formState.inputs.email.value as string);
                formData.append('name', formState.inputs.name.value as string);
                formData.append('password', formState.inputs.password.value as string);
                formData.append('image', formState.inputs.image.value as File);
                const responseData = await sendRequest(`${BACKEND_URL}/users/signup`, 'POST', formData);
                const { userId, token } = responseData;
                login(userId, token);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const switchModeHandler = () => {
        if (!isLogin) {
            const { name, ...rest } = formState.inputs; // Destructure to exclude 'name'
            setFormData(
                rest, // Pass the remaining inputs
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
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
        }
        setIsLogin((prevMode) => !prevMode);
    };

    return (
        <>
            {error && <ErrorModal error={error} onClear={clearError} />}
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    {!isLogin && (
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            label="Your Name"
                            validators={[VALIDATOR_MINLENGTH(6)]}
                            errorText="Please enter a name."
                            onInput={inputHandler}
                        />
                    )}
                    {!isLogin && (
                        <ImageUpload
                            center
                            id="image"
                            onInput={inputHandler as any}
                            errorText="Please upload a profile image."
                        />
                    )}
                    <Input
                        element="input"
                        id="email"
                        type="email"
                        label="E-Mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email address."
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a valid password, at least 6 characters."
                        onInput={inputHandler}
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </Button>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </Button>
            </Card>
        </>
    );
};

export default Auth;
