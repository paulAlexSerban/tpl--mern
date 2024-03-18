import express, { Express, Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import logger from './middleware/logger';
import errorHandler from './middleware/error';
import dotenv from 'dotenv';
import bootcampsRouter from './routes/bootcamps';
import indexRouter from './routes/index';
import connectDB from './config/database';
import promClient from 'prom-client';
import { importData, deleteData } from './seeder';
// Prometheus
const register = new promClient.Registry();

promClient.collectDefaultMetrics({
    prefix: 'node_',
    gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    register,
});

const httpRequestTimer = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10], // 0.1 to 10 seconds
});

// Register the histogram
register.registerMetric(httpRequestTimer);

// load env vars
dotenv.config();

// connect to database
connectDB();

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}
// Body parser
app.use(express.json());

// Form data
app.use(express.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// Mock slow endpoint, waiting between 3 and 6 seconds to return a response
const createDelayHandler = async (req: Request, res: Response) => {
    if (Math.floor(Math.random() * 100) === 0) {
        throw new Error('Internal Error');
    }
    // Generate number between 3-6, then delay by a factor of 1000 (miliseconds)
    const delaySeconds = Math.floor(Math.random() * (6 - 3)) + 3;
    await new Promise((res) => setTimeout(res, delaySeconds * 1000));
    res.end('Slow url accessed!');
};

app.use('/api/v1/bootcamps', bootcampsRouter);
app.get('/metrics', async (req, res) => {
    // Start the HTTP request timer, saving a reference to the returned method
    const end = httpRequestTimer.startTimer();
    // Save reference to the path so we can record it when ending the timer
    const route = req.route.path;
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
    // End timer and add labels
    end({ route, code: res.statusCode, method: req.method });
});
app.get('/api/v1/slow', async (req, res) => {
    const end = httpRequestTimer.startTimer();
    const route = req.route.path;
    await createDelayHandler(req, res);
    end({ route, code: res.statusCode, method: req.method });
});

app.get("/api/v1/seed/import/bootcamps", async (req, res) => {
    const end = httpRequestTimer.startTimer();
    const route = req.route.path;
    await importData();
    res.send("Bootcamps Data Imported");
    end({ route, code: res.statusCode, method: req.method });
});

// app.get("/api/v1/seed/delete/bootcamps", async (req, res) => {
//     const end = httpRequestTimer.startTimer();
//     const route = req.route.path;
//     await deleteData();
//     res.send("Bootcamps Data Deleted");
//     end({ route, code: res.statusCode, method: req.method });
// });

app.use(errorHandler);
app.use('/', indexRouter);

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

export default app;
