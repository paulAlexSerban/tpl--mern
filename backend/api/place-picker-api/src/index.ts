import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4001;

app.use(express.static('./assets/images/'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/places', async (req: Request, res: Response) => {
    const fileContent = await fs.readFile('./data/places.json', 'utf-8');

    const placesData = JSON.parse(fileContent);

    res.status(200).json({ places: placesData });
});

app.get('/user-places', async (req: Request, res: Response) => {
    const fileContent = await fs.readFile('./data/user-places.json', 'utf-8');

    const places = JSON.parse(fileContent);

    res.status(200).json({ places });
});

app.put('/user-places', async (req: Request, res: Response) => {
    const places = req.body.places;

    await fs.writeFile('./data/user-places.json', JSON.stringify(places));

    res.status(200).json({ message: 'User places updated!' });
});

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

app.listen(port, () => {
    console.log(`⚡️ [server]: place-picker service is running at port: ${port}`);
});
