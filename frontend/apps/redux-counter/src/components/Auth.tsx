import { type FormEvent } from 'react';
import { useAppDispatch } from '@/store/hooks';
import classes from './Auth.module.scss';

import { login } from '@/store/slices/authentication';

const Auth = () => {
    const dispatch = useAppDispatch();

    const loginHandler = (event: FormEvent) => {
        event.preventDefault();
        dispatch(login());
    };

    return (
        <main className={classes.auth}>
            <section>
                <form onSubmit={loginHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
