export type Coords = {
    lat: number;
    lng: number;
};

export type GeocodeResponse = {
    results: {
        geometry: {
            location: Coords;
        };
    }[];
    status: string;
};
