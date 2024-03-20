import { FC, useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './Map.scss';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

type MapProps = {
    zoom: number;
    center: { lat: number; lng: number };
    title: string;
};
const Map: FC<MapProps> = ({ zoom, center, title }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mapRef.current) {
            return;
        }
        const loader = new Loader({
            apiKey: GOOGLE_MAPS_API_KEY,
            version: 'weekly',
        });

        const mapOptions = {
            center,
            zoom,
            mapId: 'spot-share',
        } as google.maps.MapOptions;

        loader.importLibrary('maps').then(async () => {
            if (mapRef.current) {
                const map = new window.google.maps.Map(mapRef.current, mapOptions);
                const { AdvancedMarkerElement } = (await google.maps.importLibrary(
                    'marker'
                )) as google.maps.MarkerLibrary;

                new AdvancedMarkerElement({
                    map,
                    position: center,
                    title: title,
                });
            }
        });
    }, []);

    return (
        <div className="map" ref={mapRef}>
            <h2>The Map!</h2>
        </div>
    );
};

export default Map;
