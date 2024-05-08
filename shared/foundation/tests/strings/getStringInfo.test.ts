import { getStringInfo } from '../../src/strings';

describe('getStringInfo for str hello should', () => {
    it('return info about a string', () => {
        // SUT - System Under Test
        const SUT = getStringInfo;
        const expected = {
            lowerCase: 'hello',
            upperCase: 'HELLO',
            characters: ['h', 'e', 'l', 'l', 'o'],
            length: 5,
            extraInfo: {},
        };

        // Act
        const str = 'hello';
        const actual = SUT(str);

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
});

describe('getStringInfo for str My-String should', () => {
    const SUT = getStringInfo;
    const str = 'My-String';

    it('return right length', () => {
        // Arrange
        const expected = 9;

        // Act
        const actual = SUT(str).length;

        // Assert
        expect(actual).toBe(expected);
    });

    it('return right lower case', () => {
        // Arrange
        const expected = 'my-string';

        // Act
        const actual = SUT(str).lowerCase;

        // Assert
        expect(actual).toBe(expected);
    });

    test('return right upper case', () => {
        // Arrange
        const expected = 'MY-STRING';

        // Act
        const actual = SUT(str).upperCase;

        // Assert
        expect(actual).toBe(expected);
    });

    it('return right characters', () => {
        // Arrange
        const expected = ['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'];

        // Act
        const actual = SUT(str).characters;

        // Assert
        expect(actual).toEqual(expected);
    });

    it('return right extraInfo', () => {
        // Arrange
        const expected = {};

        // Act
        const actual = SUT(str).extraInfo;

        // Assert
        expect(actual).toEqual(expected);
    });
});
