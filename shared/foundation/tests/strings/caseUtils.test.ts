import { toUpperCase, toUpperCaseWithCallback } from '../../src/strings';

describe('toUpperString for str hello should', () => {
    test('return a string in uppercase', () => {
        // SUT - System Under Test
        const SUT = toUpperCase;
        const expected = 'HELLO';

        // Act
        const str = 'hello';
        const actual = SUT(str);

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('toUpperString parametrized examples', () => {
    it.each([
        { input: 'hello', expected: 'HELLO' },
        { input: 'my-string', expected: 'MY-STRING' },
        { input: 'default', expected: 'DEFAULT' },
    ])('should return $input in uppercase as $expected', ({ input, expected }) => {
        // Arrange
        const SUT = toUpperCase;

        // Act
        const actual = SUT(input);

        // Assert
        expect(actual).toBe(expected);
    });
});

describe('toUpperCaseWithCallback test suite', () => {
    it('should call callback for invalid argument', () => {
        // Arrange
        const SUT = toUpperCaseWithCallback;
        /**
         * Fake - a function that does nothing
         * Fake - in testing is a simplified working implementation, it is a shortcut
         * `() => {}` is a fake function
         * BUT! - with Fakes we are not sure if the function is called - we use mocks for that
         */
        const callback = () => {};
        const expected = 'Invalid argument! str is required.';

        // Act
        const actual = SUT('', callback);

        // Assert
        expect(actual).toBeUndefined();
    });

    it('should call callback with valid argument', () => {
        // Arrange
        const SUT = toUpperCaseWithCallback;
        const callback = () => {};
        const expected = 'HELLO';

        // Act
        const actual = SUT('hello', callback);

        // Assert
        expect(actual).toBe(expected);
    });

    describe('should track calls to callback', () => {
        /**
         * Custom implementation of a callback mock
         * Simple implementation of a callback mock
         * Mock - programmed object that tracks calls
         */
        let callbackArgs: string[] = [];
        let timesCalled = 0;

        const callbackMock = (str: string) => {
            callbackArgs.push(str);
            timesCalled++;
        };

        beforeEach(() => {
            callbackArgs = [];
            timesCalled = 0;
        });

        it('should call callback for invalid argument - track calls', () => {
            // Arrange
            const SUT = toUpperCaseWithCallback;
            const expected = 'Invalid argument!';

            // Act
            const actual = SUT('', callbackMock);

            // Assert
            expect(actual).toBeUndefined();
            expect(callbackArgs).toContain('Invalid argument! str is required.');
            expect(timesCalled).toBe(1);
        });

        it('should call callback with valid argument - track calls', () => {
            // Arrange
            const SUT = toUpperCaseWithCallback;
            const expected = 'HELLO';

            // Act
            const actual = SUT('hello', callbackMock);

            // Assert
            expect(actual).toBe(expected);
            expect(callbackArgs).toContain(`The string is: hello`);
            expect(timesCalled).toBe(1);
        });
    });

    describe('should track calls to callback with jest.fn()', () => {
        /**
         * Jest implementation of a callback mock
         * Simple implementation of a callback mock
         * Mock - programmed object that tracks calls
         */
        const callbackMock = jest.fn();

        beforeEach(() => {
            callbackMock.mockClear();
        });

        it('should call callback for invalid argument - track calls', () => {
            // Arrange
            const SUT = toUpperCaseWithCallback;
            const expected = 'Invalid argument!';

            // Act
            const actual = SUT('', callbackMock);

            // Assert
            expect(actual).toBeUndefined();
            expect(callbackMock).toHaveBeenCalledTimes(1);
            expect(callbackMock).toHaveBeenCalledWith('Invalid argument! str is required.');
        });

        it('should call callback with valid argument - track calls', () => {
            // Arrange
            const SUT = toUpperCaseWithCallback;
            const expected = 'HELLO';

            // Act
            const actual = SUT('hello', callbackMock);

            // Assert
            expect(actual).toBe(expected);
            expect(callbackMock).toHaveBeenCalledTimes(1);
            expect(callbackMock).toHaveBeenCalledWith(`The string is: hello`);
        });
    });
});
