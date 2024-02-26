// UserController.ts
import { HttpGet } from '../decorators';
import { Request, Response } from 'express';

export class UserController {
    @HttpGet('/users')
    getUsers(req: Request, res: Response): void {
        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
        ];
        res.json(users);
    }
}
