import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
const ErrorPage = () => {
    const error = useRouteError();
    const { status = 500, message = 'An unexpected error occurred' } = error as { status: number; message: string };
    console.log('Error from router:', error);
    const errors: { [key: string]: string } = {
        404: 'Not Found',
        500: 'Server Error',
        403: 'Forbidden',
        401: 'Unauthorized',
        400: 'Bad Request',
        405: 'Method Not Allowed',
        503: 'Service Unavailable',
        504: 'Gateway Timeout',
    };

    let title = errors[status] || `Error ${status}`;
    let messageContent = message || 'Something went wrong!';

    return (
        <>
            <PageContent title={title}>
                <div>{messageContent}</div>
            </PageContent>
        </>
    );
};

export default ErrorPage;
