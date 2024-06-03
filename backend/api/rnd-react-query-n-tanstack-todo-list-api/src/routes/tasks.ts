import express, { Router, Request, Response } from 'express';
import { v4 as nanoid } from 'uuid';
import morgan from 'morgan';

const router: Router = express.Router();

let taskList = [
    { title: 'walk the dog', isDone: false },
    { title: 'wash dishes', isDone: false },
    { title: 'drink coffee', isDone: true },
    { title: 'take a nap', isDone: false },
].map((task) => ({ ...task, id: nanoid() }));

if (process.env.NODE_ENV !== 'production') {
    router.use(morgan('dev'));
}

router.get('/', (req: Request, res: Response) => {
    res.json({ taskList });
});

router.post('/', (req: Request, res: Response) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ msg: 'please provide title' });
        return;
    }
    const newTask = { id: nanoid(), title, isDone: false };
    taskList = [...taskList, newTask];
    res.json({ task: newTask });
});

router.patch('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { isDone } = req.body;

    taskList = taskList.map((task) => {
        if (task.id === id) {
            return { ...task, isDone };
        }
        return task;
    });

    res.json({ msg: 'task updated' });
});

router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    taskList = taskList.filter((task) => task.id !== id);

    res.json({ msg: 'task removed' });
});

export default router;
