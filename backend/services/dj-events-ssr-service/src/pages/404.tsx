import GenericLayout from '@/components/GenericLayout';
import Link from 'next/link';
import styles from '@/styles/404.module.scss';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <GenericLayout title="Page Not Found">
            <div className={styles.error}>
                <h1>
                    <FaExclamationTriangle /> 404
                </h1>
                <p>Sorry, there is nothing here!</p>
                <Link href="/">Go back home!</Link>
            </div>
        </GenericLayout>
    );
};

export default NotFoundPage;
