import express, { Router, Request, Response, NextFunction } from 'express';
import { pool } from '../db';

const router: Router = express.Router();

/* GET */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.send(dbRes.rows);
    });
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    pool.query('SELECT * FROM monsters WHERE id = $1', [id], (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.send(dbRes.rows);
    });
});

/* POST */
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const { name, personality } = req.body;

    pool.query('INSERT INTO monsters (name, personality) VALUES ($1, $2)', [name, personality], (err, dbRes) => {
        if (err) {
            return next(err);
        }

        // redirect to GET /monsters instead of sending the new monster
        res.redirect('/api/monsters');
    });
});

/* PUT */
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const keys = ['name', 'personality'];
    const fields: string[] = [];

    keys.forEach((key) => {
        if (req.body[key]) {
            fields.push(key);
        }
    });

    fields.forEach((field, index) => {
        pool.query(`UPDATE monsters SET ${field} = $1 WHERE id = $2`, [req.body[field], id], (err, dbRes) => {
            if (err) {
                return next(err);
            }

            if (index === fields.length - 1) {
                res.redirect('/api/monsters');
            }
        });
    });
});

/* DELETE */
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    pool.query('DELETE FROM monsters WHERE id = $1', [id], (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.redirect('/api/monsters');
    });
});

export default router;
