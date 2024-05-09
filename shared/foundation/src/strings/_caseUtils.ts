import { v4 as uuid } from 'uuid';
import { StingInfo } from './_getStringInfo';
export const toUpperCase = (str: string): string => str.toUpperCase();
export const toLowerCaseQWithId = (str: string): string => {
    if (!str) {
        return uuid();
    }
    return `${str.toLowerCase()} - ${uuid()}`;
    // return str.toLowerCase() + uuid();
};

type LoggerServiceCallback = (str: string) => void;

export const toUpperCaseWithCallback = (str: string, callback: LoggerServiceCallback): string => {
    if (!str) {
        callback('Invalid argument! str is required.');
        return;
    }
    callback(`The string is: ${str}`);
    return str.toUpperCase();
};

export const calculateComplexity = (stringInfo: StingInfo): number => {
    return Object.keys(stringInfo.extraInfo).length + stringInfo.length;
};
