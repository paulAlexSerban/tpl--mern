class HttpError extends Error {
    code: number;

    constructor(public message: string, public errorCode: number) {
        super(message);
        this.code = errorCode;
    }
}

export default HttpError;
