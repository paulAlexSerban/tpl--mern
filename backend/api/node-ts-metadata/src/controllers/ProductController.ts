// ProductController.ts
import { HttpGet, HttpPost, HttpPut, HttpDelete } from '../decorators';
import { Request, Response } from 'express';

export class ProductController {
    @HttpGet('/products')
    getAllProducts(req: Request, res: Response) {
        // Logic to fetch all products
        res.json([
            { id: 1, name: 'Product A' },
            { id: 2, name: 'Product B' },
        ]);
    }

    @HttpGet('/products/:id')
    getProduct(req: Request, res: Response) {
        // Logic to fetch a single product by id
        const { id } = req.params;
        res.json({ id, name: `Product ${id}` });
    }

    @HttpPost('/products')
    addProduct(req: Request, res: Response) {
        // Logic to add a new product
        res.status(201).send(`Product added`);
    }

    @HttpPut('/products/:id')
    updateProduct(req: Request, res: Response) {
        // Logic to update an existing product
        const { id } = req.params;
        res.send(`Product ${id} updated`);
    }

    @HttpDelete('/products/:id')
    deleteProduct(req: Request, res: Response) {
        // Logic to delete a product
        const { id } = req.params;
        res.send(`Product ${id} deleted`);
    }
}
