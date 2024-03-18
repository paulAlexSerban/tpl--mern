import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../utils/errorResponse';

interface CustomError extends Error {
    statusCode?: number;
    value?: string;
    errors?: Record<string, { message: string }>;
    code?: number;
}

interface ErrorHandlers {
    [key: string]: () => void;
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // Enhanced logging

    // Default error response
    let response = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Server Error',
    };

    const errors: ErrorHandlers = {
        CastError: () => {
            response.statusCode = 404;
            response.message = `Resource not found with id of ${err.value}`;
        },
        ValidationError: () => {
            response.statusCode = 400;
            response.message = Object.values(err.errors ?? {})
                .map((e) => e.message)
                .join(' - ');
        },
        MongoError: () => {
            if (err.code === 11000) {
                response.statusCode = 400;
                response.message = 'Duplicate field value entered';
            }
        },
        default: () => {
            response.statusCode = err.statusCode || 500;
            response.message = err.message || 'Server Error';
        },
    };

    // Dynamically execute the error handler based on err.name or err.code
    const handler = errors[err.name] || errors[`code_${err.code}`] || errors.default;
    handler();

    // Set the ErrorResponse for specific cases if needed
    const errorResponse = new ErrorResponse(response.message, response.statusCode);

    res.status(response.statusCode).json({
        success: false,
        error: errorResponse.message,
    });
};

export default errorHandler;
