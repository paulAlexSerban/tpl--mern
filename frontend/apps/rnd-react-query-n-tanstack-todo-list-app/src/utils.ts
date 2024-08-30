import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const customFetch = axios.create({
    baseURL: `${BACKEND_URL}/tasks`,
});

export default customFetch;
