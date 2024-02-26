import { FC } from 'react';

export type Place = {
    id: string;
    title: string;
    image: {
        src: string;
        alt: string;
    };
};

export type PlacesProps = {
    title: string;
    places: Place[];
    fallbackText?: string;
    onSelectPlace?: (place: Place) => void;
    loadingText?: string;
    isLoading?: boolean;
};

const Places: FC<PlacesProps> = ({ title, places, fallbackText, onSelectPlace, isLoading, loadingText }) => {
    return (
        <section className="places-category">
            <h2>{title}</h2>
            {isLoading && <p className="fallback-text">{loadingText}</p>}
            {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
            {!isLoading && places.length > 0 && (
                <ul className="places">
                    {places.map((place) => (
                        <li key={place.id} className="place-item">
                            {onSelectPlace && (
                                <button onClick={() => onSelectPlace(place)}>
                                    <img src={`http://localhost:4001/${place.image.src}`} alt={place.image.alt} />
                                    <h3>{place.title}</h3>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Places;
