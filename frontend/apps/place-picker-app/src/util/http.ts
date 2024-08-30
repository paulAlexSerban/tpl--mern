import { Place } from '../components/Places';

export const getData = async (query: string) => {
    const response = await fetch(query);
    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message);
    }

    return responseData.places;
};

export const putData = async (places: Place[]) => {
    const response = await fetch('http://localhost:4001/user-places', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ places }),
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message);
    }

    return responseData.message;
};
