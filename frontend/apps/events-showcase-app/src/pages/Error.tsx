import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
const ErrorPage = () => {
    const error = useRouteError();
    const { status, message } = error as { status: number; message: string };

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

    let title = errors[status.toString()] || `Error ${status}`;

    // Use a specific message if available, otherwise a generic one
    let messageContent = message || 'Something went wrong!';

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <div>{messageContent}</div>
            </PageContent>
        </>
    );
};

export default ErrorPage;
