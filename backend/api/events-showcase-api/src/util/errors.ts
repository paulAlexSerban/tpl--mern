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

export { NotFoundError };
