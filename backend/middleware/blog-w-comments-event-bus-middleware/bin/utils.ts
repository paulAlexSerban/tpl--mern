/**
 * Normalize a port into a number, string, or false.
 */
type NormalizePort = (val: string) => number | string | boolean;

export const normalizePort: NormalizePort = (val: string) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};
