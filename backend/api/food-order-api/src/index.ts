import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4001;

app.use(express.static('./public/images/'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/meals', async (req, res) => {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
});

app.post('/orders', async (req, res) => {
    const orderData = req.body.order;

    if (orderData === null || orderData.items === null || orderData.items.length === 0) {
        return res.status(400).json({ message: 'Missing data.' });
    }

    if (
        orderData.customer.email === null ||
        !orderData.customer.email.includes('@') ||
        orderData.customer.name === null ||
        orderData.customer.name.trim() === '' ||
        orderData.customer.street === null ||
        orderData.customer.street.trim() === '' ||
        orderData.customer['postal-code'] === null ||
        orderData.customer['postal-code'].trim() === '' ||
        orderData.customer.city === null ||
        orderData.customer.city.trim() === ''
    ) {
        return res.status(400).json({
            message: 'Missing data: Email, name, street, postal code or city is missing.',
        });
    }

    const newOrder = {
        ...orderData,
        id: (Math.random() * 1000).toString(),
    };
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const allOrders = JSON.parse(orders);
    allOrders.push(newOrder);
    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
    res.status(201).json({ message: 'Order created!' });
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
