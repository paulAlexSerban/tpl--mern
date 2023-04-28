import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Empire_State_Building_(HDR).jpg',
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1',
        location: {
            lat: 40.7484405,
            lng: -73.9878531,
        },
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Empire_State_Building_(HDR).jpg',
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u2',
        location: {
            lat: 40.7484405,
            lng: -73.9878531,
        },
    },
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
    console.log(userId)
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
