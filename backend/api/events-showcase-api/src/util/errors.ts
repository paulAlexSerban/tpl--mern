interface INotFoundError {
    message: string;
    status: number;
}

class NotFoundError extends Error implements INotFoundError {
    status: number;

    constructor(message: string) {
        super(message);
        this.status = 404;
    }
}

interface INotAuthError {
    message: string;
    status: number;
}

class NotAuthError extends Error implements INotAuthError {
    status: number;

    constructor(message: string) {
        super(message);
        this.status = 401;
    }
}

export type Errors = {
    [key: string]: string;
};

export { NotFoundError, NotAuthError };
