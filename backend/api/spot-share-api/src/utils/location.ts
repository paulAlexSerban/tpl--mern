import HttpError from '../models/http-error';
import { Coords, GeocodeResponse } from './.types';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
    const error = new HttpError('Google Maps API key not found', 500);
    throw error;
}

const getCoordsForAddress = async (address: string): Promise<Coords> => {
    const uriEncodedAddress = encodeURIComponent(address);
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${uriEncodedAddress}&key=${GOOGLE_MAPS_API_KEY}`
    );
    // Use type assertion here to tell TypeScript the expected type of the response data
    const data = (await response.json()) as GeocodeResponse;
    if (!data || data.status === 'ZERO_RESULTS') {
        const error = new HttpError('Could not find location for the specified address.', 422);
        throw error;
    }
    const coordinates = data.results[0].geometry.location;
    return coordinates;
};

export { getCoordsForAddress };
