import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import { v1 as uuidv1 } from 'uuid';
import { createFolder } from '../utils/file';
import path from 'path';
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

const storageDestination = async (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
): Promise<void> => {
    const pathString = path.join('dist/src/public/uploads/images');
    await createFolder(pathString);
    callback(null, pathString);
};

const storageFilename = (request: Request, file: Express.Multer.File, callback: FileNameCallback): void => {
    const ext = MIME_TYPE_MAP[file.mimetype];
    const filename = file.originalname.toLowerCase().split(' ').join('-').split('.').slice(0, -1).join('.');
    const uniqueId = uuidv1();
    callback(null, `${uniqueId}-${filename}.${ext}`);
};

export const fileUpload = multer({
    limits: { fileSize: 60 * 1024 * 1024 }, // 60MB
    storage: multer.diskStorage({
        destination: storageDestination,
        filename: storageFilename,
    }),
    fileFilter,
});

export default fileUpload;
