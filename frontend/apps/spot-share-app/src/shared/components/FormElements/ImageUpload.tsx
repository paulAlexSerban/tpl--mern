import { FC, useRef, ChangeEvent, useState, useEffect } from 'react';
import Button from './Button';
import './ImageUpload.scss';

type ImageUploadProps = {
    id: string;
    center: boolean;
    errorText: string;
    onInput: (id: string, value: string | File | null, isValid: boolean) => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ center, onInput, id, errorText }) => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean>(false);

    const filePickerRef = useRef<HTMLInputElement>(null);

    const pickImageHandler = () => {
        console.log(filePickerRef);
        if (filePickerRef.current) {
            filePickerRef.current.click();
        }
    };

    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setPreviewUrl(fileReader.result);
            }
        };
        fileReader.readAsDataURL(file);
    }, [file, onInput, isValid]);

    const pickedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        if (pickedFile) {
            onInput(id, pickedFile, fileIsValid);
        }
    };

    return (
        <div className="form-control">
            <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id={id}
                style={{ display: 'none' }}
                ref={filePickerRef}
                onChange={pickedHandler}
            />
            <div className={`image-upload ${center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {!previewUrl && <p>Please pick an image.</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>
                    Pick Image
                </Button>
            </div>
            {!isValid && <p>{errorText}</p>}
        </div>
    );
};

export default ImageUpload;
