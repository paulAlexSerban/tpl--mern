import { type FC } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem, { PlaceItemProps } from './PlaceItem';
import './PlaceList.scss';

export type PlaceListProps = {
    onDeletePlace: (id: string) => void;
    items: PlaceItemProps[];
};

const PlaceList: FC<PlaceListProps> = (props) => {
    if (props.items.length === 0 || !props.items) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                    <Button to="/places/new">Share Place</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map((place) => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    imageUrl={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creator={place.creator}
                    location={place.location}
                    onDelete={props.onDeletePlace}
                />
            ))}
        </ul>
    );
};

export default PlaceList;
