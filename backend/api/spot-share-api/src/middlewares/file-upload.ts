import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { v1 as uuidv1 } from 'uuid';
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const MIME_TYPE_MAP: { [key: string]: string } = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
};

const fileFilter = (request: Request, file: Express.Multer.File, callback: FileFilterCallback): void => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid mime type!');
    callback(error as any, isValid);
};

const storageDestination = (request: Request, file: Express.Multer.File, callback: DestinationCallback): void => {
    callback(null, 'uploads/images');
};

const storageFilename = (request: Request, file: Express.Multer.File, callback: FileNameCallback): void => {
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, uuidv1() + '.' + ext);
};

export const fileUpload = multer({
    limits: { fileSize: 500000 },
    storage: multer.diskStorage({
        destination: storageDestination,
        filename: storageFilename,
    }),
    fileFilter,
});

export default fileUpload;
