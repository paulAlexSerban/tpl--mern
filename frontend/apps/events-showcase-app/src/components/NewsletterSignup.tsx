import classes from './NewsletterSignup.module.scss';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

const NewsletterSignup = () => {
    // useFetcher should be used if you want to interact with some action or loader without transitioning to a new page
    // useNavigation should be used if you want to transition to a new page
    const fetcher = useFetcher();
    // Form from the fetcher object does not work the same way as Form from react-router-dom
    // it dows not transition to a new page, but instead sends a POST request to the server
    const { Form, data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        <Form method="POST" className={classes.newsletter} action="/newsletter">
            <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
            <button>Sign up</button>
        </Form>
    );
};

export default NewsletterSignup;
