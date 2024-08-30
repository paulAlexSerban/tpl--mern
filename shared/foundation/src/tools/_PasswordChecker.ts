export enum PasswordErrorsEnum {
    SHORT = 'Password is too short',
    NO_UPPERCASE = 'Password must contain at least one uppercase letter',
    NO_LOWERCASE = 'Password must contain at least one lowercase letter',
    NO_NUMBER = 'Password must contain at least one number',
}

export type CheckResult = {
    valid: boolean;
    reasons: PasswordErrorsEnum[];
};

export interface IPasswordChecker {
    checkPassword(pass: string): CheckResult;
    checkAdminPassword(pass: string): CheckResult;
}

export default class PasswordChecker implements IPasswordChecker {
    public checkPassword(pass: string) {
        const reasons: PasswordErrorsEnum[] = [];
        if (pass.length < 8) {
            reasons.push(PasswordErrorsEnum.SHORT);
        }

        if (!/[A-Z]/.test(pass)) {
            reasons.push(PasswordErrorsEnum.NO_UPPERCASE);
        }

        if (!/[a-z]/.test(pass)) {
            reasons.push(PasswordErrorsEnum.NO_LOWERCASE);
        }

        return {
            valid: reasons.length === 0,
            reasons: reasons,
        };
    }

    private checkForNumber(pass: string, reasons: PasswordErrorsEnum[]) {
        if (!/\d/.test(pass)) {
            reasons.push(PasswordErrorsEnum.NO_NUMBER);
        }
    }

    public checkAdminPassword(pass: string) {
        const basicCheck = this.checkPassword(pass);
        this.checkForNumber(pass, basicCheck.reasons);

        return {
            valid: basicCheck.reasons.length === 0,
            reasons: basicCheck.reasons,
        };
    }
}
