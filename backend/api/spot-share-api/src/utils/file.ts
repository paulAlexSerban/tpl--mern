import fs from 'fs';

export const createFolder = async (folder: string): Promise<void> => {
    try {
        await fs.promises.access(folder);
    } catch (error) {
        console.log('Creating folder: ', folder);
        await fs.promises.mkdir(folder, { recursive: true });
    }
};
