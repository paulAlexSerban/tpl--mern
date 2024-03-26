import { type FC, useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './PlaceItem.scss';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

export type PlaceItemProps = {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    address: string;
    creator: string;
    location: { lat: number; lng: number };
    onDelete: (id: string) => void;
};

const PlaceItem: FC<PlaceItemProps> = (props) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const { isLoggedIn, userId, token } = auth;
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarningHandler = () => setShowConfirmModal(true);
    const cancelDeleteHandler = () => setShowConfirmModal(false);
    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        const deletePlace = async () => {
            try {
                await sendRequest(`http://localhost:3000/api/places/${props.id}`, 'DELETE', null, {
                    Authorization: `Bearer ${token}`,
                });
                props.onDelete(props.id);
            } catch (err) {
                console.error(err);
            }
        };

        deletePlace();
    };
    return (
        <>
            {error && <ErrorModal error={error} onClear={clearError} />}
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={`http://localhost:3000/${props.imageUrl}`} alt={props.title} />
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
                        {userId === props.creator && isLoggedIn && (
                            <>
                                <Button to={`/places/${props.id}`}>Edit</Button>
                                <Button danger onClick={showDeleteWarningHandler}>
                                    Delete
                                </Button>
                            </>
                        )}
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
                    <Map center={props.location} zoom={16} title={props.title} />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item_modal-actions"
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteHandler}>
                            Cancel
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            Delete
                        </Button>
                    </>
                }
            >
                <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>
        </>
    );
};

export default PlaceItem;
