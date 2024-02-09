// decorators.ts
import 'reflect-metadata';

export const METADATA_KEY = {
    HttpGet: Symbol('HttpGetMetadata'),
    HttpPost: Symbol('HttpPostMetadata'),
    HttpPut: Symbol('HttpPutMetadata'),
    HttpDelete: Symbol('HttpDeleteMetadata'),
};

function createHttpMethodDecorator(symbol: Symbol) {
    return function (path: string): MethodDecorator {
        return function (target, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
            Reflect.defineMetadata(symbol, path, target, propertyKey);
        };
    };
}

export const HttpGet = createHttpMethodDecorator(METADATA_KEY.HttpGet);
export const HttpPost = createHttpMethodDecorator(METADATA_KEY.HttpPost);
export const HttpPut = createHttpMethodDecorator(METADATA_KEY.HttpPut);
export const HttpDelete = createHttpMethodDecorator(METADATA_KEY.HttpDelete);

/**
 * a factory function, createHttpMethodDecorator, to reduce redundancy.
 * It generates decorators for GET, POST, PUT, and DELETE HTTP methods, each tagged with unique metadata.
 */
