import fs from 'fs/promises';
import { v4 as generateId } from 'uuid';
import { NotFoundError } from '../util/errors';

async function readData() {
    const data = await fs.readFile('../../events.json', 'utf8');
    return JSON.parse(data);
}

type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
};

type Data = {
    events: Event[];
};

async function writeData(data: Data) {
    await fs.writeFile('events.json', JSON.stringify(data));
}

async function getAll() {
    const storedData = await readData();
    if (!storedData.events) {
        throw new NotFoundError('Could not find any events.');
    }
    return storedData.events;
}

async function get(id: string) {
    const storedData = await readData();
    if (!storedData.events || storedData.events.length === 0) {
        throw new NotFoundError('Could not find any events.');
    }

    const event = storedData.events.find((ev: Event) => ev.id === id);
    if (!event) {
        throw new NotFoundError('Could not find event for id ' + id);
    }

    return event;
}

async function add(data: Data) {
    const storedData = await readData();
    storedData.events.unshift({ ...data, id: generateId() });
    await writeData(storedData);
}

async function replace(id: string, data: Data) {
    const storedData = await readData();
    if (!storedData.events || storedData.events.length === 0) {
        throw new NotFoundError('Could not find any events.');
    }

    const index = storedData.events.findIndex((ev: Event) => ev.id === id);
    if (index < 0) {
        throw new NotFoundError('Could not find event for id ' + id);
    }

    storedData.events[index] = { ...data, id };

    await writeData(storedData);
}

async function remove(id: string) {
    const storedData = await readData();
    const updatedData = storedData.events.filter((ev: Event) => ev.id !== id);
    await writeData({ events: updatedData });
}

export { getAll, get, add, replace, remove };
