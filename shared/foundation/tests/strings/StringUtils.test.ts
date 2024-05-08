import StringUtils from '../../src/strings/Utils';

describe('StringUtils test suite', () => {
    let SUT: StringUtils;

    beforeEach(() => {
        SUT = new StringUtils();
        // console.log('SETUP');
    });

    // afterEach(() => {
    //     console.log('TEARDOWN');
    // });

    test('should return correct upperCase string', () => {
        // Arrange
        const expected = 'HELLO';
        // Act
        const actual = SUT.toUpperCase('hello');
        // Assert
        expect(actual).toBe(expected);
    });

    test('should return string info', () => {
        // Arrange
        const expected = {
            lowerCase: 'hello',
            upperCase: 'HELLO',
            characters: ['h', 'e', 'l', 'l', 'o'],
            length: 5,
            extraInfo: {},
        };
        // Act
        const actual = SUT.getStringInfo('hello');
        // Assert
        expect(actual.lowerCase).toBe(expected.lowerCase);
        expect(actual.upperCase).toBe(expected.upperCase);
        expect(actual.characters).toHaveLength(expected.characters.length);
        expect(actual.length).toBe(expected.length);
        expect(actual.extraInfo).toEqual(expected.extraInfo);
        expect(actual.characters).toContain<string>('h');
        expect(actual.characters).toEqual(expect.arrayContaining(expected.characters));
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).not.toBe(undefined);
    });

    test('should throw error for empty string', () => {
        const expectError = () => {
            // const actual = SUT.toUpperCase('');
            SUT.toUpperCase('');
        };

        expect(expectError).toThrow();
    });

    test('should throw error for empty string - try...catch', (done) => {
        // problem with this kind of test is that it will not fail if the error is not thrown
        try {
            SUT.toUpperCase('');
            done('should have thrown an error for invalid argument');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Invalid argument! str is required.');
            expect(error).toHaveProperty('message', 'Invalid argument! str is required.');
            done();
        }
    });
});
