/**
 * Module dependencies.
 */

import app from '../src/app';
import debug from 'debug';
import http from 'http';
import { normalizePort } from './utils';
const debugLog: debug.IDebugger = debug('api-ts-boilerplate:server');

// Set communication endpoint, prefer API_PORT if defined
const PORT = normalizePort(process.env.API_PORT || process.env.PORT || '4000');
const HOSTNAME = process.env.HOSTNAME || 'localhost';

/**
 * Get port from environment and store in Express.
 */
app.set('port', PORT);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error: { syscall: string; code: string }) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
    debugLog('Listening on ' + bind);
};

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Handle unhandled promise rejections.
 */
process.on('unhandledRejection', (err: any) => {
    console.error(`Error: ${err.message}`);
    console.info('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    });
});

/**
 * Start server with explicit hostname and port.
 */
server.listen(PORT as number, HOSTNAME, () => {
    console.info(`Server running in ${process.env.NODE_ENV} mode on http://${HOSTNAME}:${PORT}`);
});
server.on('error', onError);
server.on('listening', onListening);
