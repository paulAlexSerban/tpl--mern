import express, { Router, Request, Response, NextFunction } from 'express';
import Task from '../models/Task';

const router: Router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        res.json(tasks);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const newtask = new Task({
        text: req.body.text,
    });
    const savedTask = await newtask.save();
    res.json(savedTask);
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.end();
});

export default router;
