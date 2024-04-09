import fs from 'fs/promises';
import { v4 as generateId } from 'uuid';
import { NotFoundError } from '../util/errors';

let data = {
    events: [
        {
            id: 'e1',
            title: 'A dummy event',
            date: '2023-02-22',
            image: 'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
            description: 'Join this amazing event and connect with fellow developers.',
        },
    ],
};

async function readData() {
    // const data = await fs.readFile('../../events.json', 'utf8');
    // return JSON.parse(data);
    return data;
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
    // await fs.writeFile('events.json', JSON.stringify(data));
    data = data;
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

// Adjust the type of the parameter to be Event instead of Data
async function add(event: Event) {
    const storedData = await readData();
    if (!storedData.events) {
        storedData.events = [];
    }

    // Since now the function expects an Event object,
    // we can add it directly to the array without destructuring
    storedData.events.unshift({ ...event, id: generateId() });

    // Assuming writeData is correctly implemented to write the entire Data object back to storage
    // await writeData(storedData);
}

async function replace(id: string, newEventData: Event) {
    const storedData = await readData();
    if (!storedData.events || storedData.events.length === 0) {
        throw new NotFoundError('Could not find any events.');
    }

    const index = storedData.events.findIndex((ev: Event) => ev.id === id);
    if (index < 0) {
        throw new NotFoundError('Could not find event for id ' + id);
    }

    // Correctly assign the new event data, preserving the original event ID
    storedData.events[index] = { ...newEventData, id };

    // Update the data store with the modified events array
    await writeData(storedData);
}

async function remove(id: string) {
    const storedData = await readData();
    const updatedData = storedData.events.filter((ev: Event) => ev.id !== id);
    await writeData({ events: updatedData });
}

export { getAll, get, add, replace, remove };
