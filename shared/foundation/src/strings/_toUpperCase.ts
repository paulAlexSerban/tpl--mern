const toUpperCase = (str: string): string => str.toUpperCase();

type LoggerServiceCallback = (str: string) => void;

export const toUpperCaseWithCallback = (str: string, callback: LoggerServiceCallback): string => {
    if (!str) {
        callback('Invalid argument! str is required.');
        return;
    }
    callback(`The string is: ${str}`);
    return str.toUpperCase();
};

export default toUpperCase;
