

import bodyParser from 'body-parser';
import express, { Express, Request, Response, NextFunction } from 'express';
import productRoutes from './routes/product';
const app: Express = express();

app.use(bodyParser.json());

// CORS
app.use((req: Request, res: Response, next: NextFunction) => {
    // allows all origins
    res.setHeader('Access-Control-Allow-Origin', '*');
    /**
     * allows the following request headers
     * Origin: indicates where a fetch originates from
     * X-Requested-With: indicates whether or not a request was triggered by a client-side script
     * Content-Type: indicates the type of content sent
     * Accept: indicates the type of content the client is expecting
     * Authorization: indicates the user agent is authorized to make the request
     */
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    /**
     * allows the following request methods
     * GET: retrieve a resource
     * POST: create a resource
     * PATCH: update a resource
     * DELETE: delete a resource
     * OPTIONS: provides a list of HTTP methods that can be used on a resource
     */

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

// routes
app.use('/api/v1/product', productRoutes);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
