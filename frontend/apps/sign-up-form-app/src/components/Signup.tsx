import { FC, useState } from 'react';
import { isEqualsToOtherValue } from '../util/validation';
import Input from './Input';
import { postData } from '../http';
interface FormDataObject {
    [key: string]: FormDataEntryValue | FormDataEntryValue[];
}

const SignUp: FC = () => {
    const [passwordsNotEqual, setPasswordsNotEqual] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const acquisitionChannel = formData.getAll('acquisition');
        const data: FormDataObject = Object.fromEntries(formData.entries());
        data.acquisition = acquisitionChannel as FormDataEntryValue[];

        // Cast the password and confirm-password values to string
        const password = data.password as string;
        const confirmPassword = data['confirm-password'] as string;

        if (!isEqualsToOtherValue(password, confirmPassword)) {
            setPasswordsNotEqual(true);
            return;
        }

        postData('http://localhost:4001/signup', data);
        event.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>

            <Input label="Email" id="email" name="email" type="email" required />

            <div className="control-row">
                <Input label="Password" id="password" name="password" type="password" required minLength={8} />
                <Input
                    label="Confirm Password"
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    minLength={8}
                    error={passwordsNotEqual ? 'Passwords not match!' : undefined}
                />
            </div>

            <hr />

            <div className="control-row">
                <Input label="First Name" id="first-name" name="first-name" required />

                <Input label="Last Name" id="last-name" name="last-name" required />
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select id="role" name="role" required>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input type="checkbox" id="google" name="acquisition" value="google" />
                    <label htmlFor="google">Google</label>
                </div>

                <div className="control">
                    <input type="checkbox" id="friend" name="acquisition" value="friend" />
                    <label htmlFor="friend">Referred by friend</label>
                </div>

                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>

            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms" required />I agree to the terms and
                    conditions
                </label>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button type="submit" className="button">
                    Sign up
                </button>
            </p>
        </form>
    );
};

export default SignUp;
