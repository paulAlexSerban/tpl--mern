import express, { Router, Request, Response, NextFunction } from 'express';

const fortunes = [
    { id: 1, message: 'Love is around the corner.', lucky_number: 12, spirit_animal: 'Dog' },
    { id: 2, message: 'You will find a great treasure.', lucky_number: 15, spirit_animal: 'Lion' },
    { id: 3, message: 'One person will give you great advice.', lucky_number: 30, spirit_animal: 'Bear' },
    { id: 4, message: 'Love will come soon', spirit_animal: 'Zebra', lucky_number: 19 },
    { id: 5, message: 'Hello', lucky_number: 5, spirit_animal: 'Dog' },
    { id: 7, message: 'Success awaits you', lucky_number: 15, spirit_animal: 'Giraffe' },
];

const router: Router = express.Router();

/* GET */
router.get('/fortunes', function (req: Request, res: Response, next: NextFunction) {
    res.send(fortunes);
});

router.get('/fortunes/random', function (req: Request, res: Response, next: NextFunction) {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    res.send(fortunes[randomIndex]);
});

type Fortune = {
    id: number;
    message: string;
    lucky_number: number;
    spirit_animal: string;
};

router.get('/fortunes/:id', function (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const fortune = fortunes.find((f: Fortune) => f.id === id);
    if (fortune) {
        res.send(fortune);
    } else {
        res.status(404).send('Fortune not found');
    }
});

router.post('/fortunes', function (req: Request, res: Response, next: NextFunction) {
    const fortune: Fortune = req.body;
    const fortuneIds = fortunes.map((f: Fortune) => f.id);

    const newId = Math.max(...fortuneIds) + 1;
    fortune.id = newId;

    fortunes.push(fortune);
    res.status(201).send(fortune);
});

router.put('/fortunes/:id', function (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const fortuneIndex = fortunes.findIndex((f: Fortune) => f.id === id);
    const { message, lucky_number, spirit_animal } = req.body;
    if (fortuneIndex !== -1) {
        if (message) {
            fortunes[fortuneIndex].message = message;
        }
        if (lucky_number) {
            fortunes[fortuneIndex].lucky_number = lucky_number;
        }
        if (spirit_animal) {
            fortunes[fortuneIndex].spirit_animal = spirit_animal;
        }
        res.send(fortunes[fortuneIndex]);
    } else {
        res.status(404).send('Fortune not found');
    }
});

router.delete('/fortunes/:id', function (req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const fortuneIndex = fortunes.findIndex((f: Fortune) => f.id === id);
    if (fortuneIndex !== -1) {
        fortunes.splice(fortuneIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Fortune not found');
    }
});

export default router;
