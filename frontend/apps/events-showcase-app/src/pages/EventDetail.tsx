import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams<{ id: string }>();

    return (
        <div>
            <h1>Event Detail Page</h1>
            <p>{params.id}</p>
        </div>
    );
};

export default EventDetailPage;
