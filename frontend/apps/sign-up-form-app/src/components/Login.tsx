import { FC, useState, useEffect, ChangeEvent } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';
import { postData } from '../http';

const Login: FC = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const {
        value: emailValue,
        handleInputChange: handleEmailInputChange,
        handleInputBlur: handleEmailInputBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
    const {
        value: passwordValue,
        handleInputChange: handlePasswordInputChange,
        handleInputBlur: handlePasswordInputBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 8) && isNotEmpty(value));
    const handleReset = () => {
        // Reset the input fields using the functions from useInput
        handleEmailInputChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        handlePasswordInputChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formIsValid) {
            // Optionally, you could display an error or log a message here
            console.log('Form is not valid');
            return;
        }

        const enteredValues = {
            email: emailValue,
            password: passwordValue,
        };

        postData('http://localhost:4001/login', enteredValues, handleReset);
    };

    useEffect(() => {
        // Check if both email and password fields are valid
        const isValid =
            emailValue !== '' &&
            passwordValue !== '' &&
            !emailHasError &&
            !passwordHasError &&
            hasMinLength(passwordValue, 8);
        setFormIsValid(isValid);
    }, [emailHasError, passwordHasError, emailValue, passwordValue]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    error={emailHasError ? 'Please enter a valid email address.' : undefined}
                    onBlur={handleEmailInputBlur}
                    value={emailValue}
                    onChange={handleEmailInputChange}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    error={passwordHasError ? 'Please enter a valid password.' : undefined}
                    onBlur={handlePasswordInputBlur}
                    value={passwordValue}
                    onChange={handlePasswordInputChange}
                />
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat" onClick={handleReset}>
                    Reset
                </button>
                <button type="submit" className="button" disabled={!formIsValid}>
                    Login
                </button>
            </p>
        </form>
    );
};

export default Login;

/**
 * 1. user types value into input field
 * 2. user clicks outside of input field
 * 3. onBlur event handler is triggered
 * 4. isInputValueValid function is called
 * 4.1. YES: set inputIsInvalid state to false
 * 4.2. NO: set inputIsInvalid state to true
 * 4.2.1. show error message
 * 5. user types value another value into input field
 * 5.1 inputIsInvalid state is set to false and error message is hidden
 * 6. user clicks outside of input field
 * 7. onBlur event handler is triggered
 * 8. isInputValueValid function is called
 * 8.1. YES: set inputIsInvalid state to false
 * 8.2. NO: set inputIsInvalid state to true
 */
