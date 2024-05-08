import toUpperCase from './_toUpperCase';
import getStringInfo, { StingInfo } from './_getStringInfo';

export default class StringUtils {
    public toUpperCase(str: string): string {
        if (!str) {
            throw new Error('Invalid argument! str is required.');
        }
        return toUpperCase(str);
    }
    public getStringInfo(str: string): StingInfo {
        return getStringInfo(str);
    }

    public getFirstCharacter(str: string): string {
        return str.charAt(0);
    }

    public getLastCharacter(str: string): string {
        return str.charAt(str.length - 1);
    }
}
