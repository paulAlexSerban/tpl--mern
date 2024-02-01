import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 4001;

app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log({
        email,
        password,
    });
    res.status(200).json({ message: 'Login successful!', email, password });
});

app.post('/signup', async (req: Request, res: Response) => {
    const { email, password, role, acquisition, terms } = req.body;
    const confirmPassword = req.body['confirm-password'];
    const firstName = req.body['first-name'];
    const lastName = req.body['last-name'];

    console.log({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        role,
        acquisition,
        terms,
    });
    res.status(200).json({ message: 'Signup successful!', email, password });
});

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

app.listen(port, () => {
    console.log(`⚡️ [server]: Login service is running at port: ${port}`);
});
