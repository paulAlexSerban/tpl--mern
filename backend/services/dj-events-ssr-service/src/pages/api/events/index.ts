import { events } from './data.json';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EventsResponseData } from '@/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<EventsResponseData>) {
    if (req.method === 'GET') {
        res.status(200).json(events);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
