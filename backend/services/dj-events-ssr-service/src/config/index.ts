export const PROTOCOL = process.env.NEXT_PUBLIC_PROTOCOL || 'http';
export const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost';
export const PORT = process.env.NEXT_PUBLIC_PORT || 3000;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || `${PROTOCOL}://${HOSTNAME}:${PORT}`;
export const API_URL = process.env.NEXT_PUBLIC_API_URL || `${PROTOCOL}://${HOSTNAME}:${PORT}/api`;
