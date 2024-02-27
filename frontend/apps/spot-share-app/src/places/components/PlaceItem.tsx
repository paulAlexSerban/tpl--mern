import { FC } from 'react';

import Card from '../../shared/UIElements/Card';

import './PlaceItem.scss';

type PlaceItemProps = {
    id: string;
    image: string;
    title: string;
    description: string;
    address: string;
    creatorId: string;
    coordinates: { lat: number; lng: number };
};

const PlaceItem: FC<PlaceItemProps> = (props) => {
    return (
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <button>VIEW ON MAP</button>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </Card>
        </li>
    );
};

export default PlaceItem;
