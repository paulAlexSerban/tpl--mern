import { type FC, useState } from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Modal from '../../shared/UIElements/Modal';
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
    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    return (
        <>
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
                        <Button inverse type="button" onClick={openMapHandler}>
                            View on Map
                        </Button>
                        <Button to={`/places/${props.id}/edit`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <h2>The Map!</h2>
                </div>
            </Modal>
        </>
    );
};

export default PlaceItem;
