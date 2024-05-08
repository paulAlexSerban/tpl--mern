import { toUpperCase } from '../../src/strings';

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
