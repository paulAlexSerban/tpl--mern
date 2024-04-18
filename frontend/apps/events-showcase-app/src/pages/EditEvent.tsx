import { useRouteLoaderData } from 'react-router-dom';
import EditForm from '../components/EventForm';
import { EventItemProps } from '../types';

const EventEditPage = () => {
    const data = useRouteLoaderData('event-detail') as EventItemProps;

    return (
        <>
            <EditForm method="PUT" event={data.event} />
        </>
    );
};

export default EventEditPage;
