import cookie from 'cookie';
import { IncomingMessage } from 'http';

const parseCookies = (req: IncomingMessage & { cookies: Partial<{ [key: string]: string }> }) => {
    return cookie.parse(req ? req.headers.cookie || '' : '');
};

export { parseCookies };
