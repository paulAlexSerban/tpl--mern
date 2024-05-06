import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';
import classes from './AuthForm.module.scss';

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const data = useActionData() as { errors: { [key: string]: string } };
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Form method="post" className={classes.form}>
            <h1>{isLogin ? 'Login' : 'Create a new user'}</h1>
            {data && data.errors && (
                <ul>
                    {Object.keys(data.errors).map((key) => (
                        <li key={key}>{data.errors[key]}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
            </p>
            <p>
                <label htmlFor="image">Password</label>
                <input id="password" type="password" name="password" required />
            </p>
            <div className={classes.actions}>
                <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Create new user' : 'Login'}</Link>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
};

export default AuthForm;
