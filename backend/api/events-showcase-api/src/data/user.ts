import { hash } from 'bcryptjs';
import { v4 as generateId } from 'uuid';

import { NotFoundError } from '../util/errors';

let DBdata = {
    users: [
        {
            id: 'u1',
            email: 'test@test.com',
            password: '123123',
        },
    ],
};

const readData = async () => {
    return DBdata;
};

type User = {
    id: string;
    email: string;
    password: string;
};

type Data = {
    users: User[];
};

const writeData = async (data: Data) => {
    DBdata = data;
    console.log(data);
};

async function add(data: { email: string; password: string }) {
    const storedData = await readData();
    const userId = generateId();
    const hashedPw = await hash(data.password, 12);
    if (!storedData.users) {
        storedData.users = [];
    }
    storedData.users.push({ ...data, password: hashedPw, id: userId });
    await writeData(storedData);
    return { id: userId, email: data.email };
}

async function get(email: string) {
    const storedData = await readData();
    if (!storedData.users || storedData.users.length === 0) {
        throw new NotFoundError('Could not find any users.');
    }

    const user = storedData.users.find((ev) => ev.email === email);
    if (!user) {
        throw new NotFoundError('Could not find user for email ' + email);
    }

    return user;
}

export { add, get };
