import PasswordChecker, { IPasswordChecker, PasswordErrorsEnum, CheckResult } from '../../src/tools/_PasswordChecker';

describe('PasswordChecker', () => {
    let SUT: IPasswordChecker;

    beforeEach(() => {
        SUT = new PasswordChecker();
    });

    it('password with less than 8 chars is invalid', () => {
        const actual = SUT.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrorsEnum.SHORT);
    });

    it('password with 8 chars is valid', () => {
        const actual = SUT.checkPassword('1a2b3c4d5e6f7A8h');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrorsEnum.SHORT);
    });

    it('password with no uppercase letter is invalid', () => {
        const actual = SUT.checkPassword('1a2b3c4d5e6f7g8h');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrorsEnum.NO_UPPERCASE);
    });

    it('password with uppercase letter is valid', () => {
        const actual = SUT.checkPassword('1a2b3c4d5e6f7g8H');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrorsEnum.NO_UPPERCASE);
    });

    it('password with no lowercase letter is invalid', () => {
        const actual = SUT.checkPassword('1A2B3C4D5E6F7G8H');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrorsEnum.NO_LOWERCASE);
    });

    it('password with lowercase letter is valid', () => {
        const actual = SUT.checkPassword('1A2B3C4D5E6F7G8h');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrorsEnum.NO_LOWERCASE);
    });

    it('Admin password with no number is invalid', () => {
        const actual = SUT.checkAdminPassword('aAaAaAaA');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrorsEnum.NO_NUMBER);
    });
});
