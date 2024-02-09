// server.ts
import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/ProductController';
import { METADATA_KEY } from './decorators';

const app = express();
app.use(bodyParser.json());
const port = 3000;

// A simple mapping object could look something like this:
const httpMethodMappings = {
    [METADATA_KEY.HttpGet]: 'get',
    [METADATA_KEY.HttpPost]: 'post',
    [METADATA_KEY.HttpPut]: 'put',
    [METADATA_KEY.HttpDelete]: 'delete',
};

function registerRoutes(controllerInstance: any) {
    const prototype = Object.getPrototypeOf(controllerInstance);

    Object.getOwnPropertyNames(prototype).forEach((method) => {
        Object.keys(METADATA_KEY).forEach((key) => {
            const metadataKey = METADATA_KEY[key];
            const path: string = Reflect.getMetadata(metadataKey, prototype, method);
            if (path) {
                const httpMethod = httpMethodMappings[metadataKey];
                if (typeof app[httpMethod] === 'function') {
                    app[httpMethod](path, (req: Request, res: Response) => {
                        prototype[method].call(controllerInstance, req, res);
                    });
                    console.log(`Route registered: ${httpMethod.toUpperCase()} ${path}`);
                } else {
                    console.error(`HTTP method '${httpMethod}' is not supported by Express`);
                }
            }
        });
    });
}

const productController = new ProductController();
const userController = new UserController();
registerRoutes(userController);
registerRoutes(productController);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
