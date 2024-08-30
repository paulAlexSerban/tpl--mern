import { FC } from 'react';
import Modal from './Modal';
import Button from '../FormElements/Button';

type ErrorModalProps = {
    error: string;
    onClear: () => void;
};

const ErrorModal: FC<ErrorModalProps> = (props) => {
    return (
        <Modal
            onCancel={props.onClear}
            header="An Error Occurred!"
            show={!!props.error}
            footer={<Button onClick={props.onClear}>Okay</Button>}
        >
            <p>{props.error}</p>
        </Modal>
    );
};

export default ErrorModal;
