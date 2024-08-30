import { toUpperCase } from './_caseUtils';
import { getStringInfo, StingInfo } from './_getStringInfo';

export class StringUtils {
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

export class OtherStringUtils {
    public toUpperCase(str: string): string {
        return toUpperCase(str);
    }

    public logString(str: string): void {
        console.log(str);
    }

    private callExternalService(): void {
        console.log('Calling private external service...');
    }
}
