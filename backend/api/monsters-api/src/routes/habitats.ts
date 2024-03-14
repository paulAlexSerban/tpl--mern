import express, { Router, Request, Response, NextFunction } from 'express';
import { pool } from '../db';

const router: Router = express.Router();

/* GET */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    pool.query('SELECT * FROM habitats ORDER BY id ASC', (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.send(dbRes.rows);
    });
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    pool.query('SELECT * FROM habitats WHERE id = $1', [id], (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.send(dbRes.rows);
    });
});

/* POST */

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const { climate, temperature, name } = req.body;

    pool.query(
        'INSERT INTO habitats (climate, temperature, name) VALUES ($1, $2, $3)',
        [climate, temperature, name],
        (err, dbRes) => {
            if (err) {
                return next(err);
            }

            // redirect to GET /habitats instead of sending the new habitat
            res.redirect('/api/habitats');
        }
    );
});

/* PUT */

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const keys = ['climate', 'temperature', 'name'];
    const fields: string[] = [];

    keys.forEach((key) => {
        if (req.body[key]) {
            fields.push(key);
        }
    });

    fields.forEach((field, index) => {
        pool.query(`UPDATE habitats SET ${field} = $1 WHERE id = $2`, [req.body[field], id], (err, dbRes) => {
            if (err) {
                return next(err);
            }
        });
    });

    res.redirect(`/api/habitats`);
});

/* DELETE */

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    pool.query('DELETE FROM habitats WHERE id = $1', [id], (err, dbRes) => {
        if (err) {
            return next(err);
        }

        res.redirect('/api/habitats');
    });
});

export default router;
