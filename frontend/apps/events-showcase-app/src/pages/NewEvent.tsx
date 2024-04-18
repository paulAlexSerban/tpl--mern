import EventForm from '../components/EventForm';
import { ActionFunction, redirect } from 'react-router-dom';
import { json } from 'react-router-dom';
const NewEvent = () => {
    return <EventForm method="POST" />;
};

export default NewEvent;
