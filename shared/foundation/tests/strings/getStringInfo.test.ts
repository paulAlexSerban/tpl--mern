import { getStringInfo, calculateComplexity } from '../../src/strings';

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
        const expected = 9;
        const actual = SUT(str).length;
        expect(actual).toBe(expected);
    });

    it('return right lower case', () => {
        const expected = 'my-string';
        const actual = SUT(str).lowerCase;
        expect(actual).toBe(expected);
    });

    test('return right upper case', () => {
        const expected = 'MY-STRING';
        const actual = SUT(str).upperCase;
        expect(actual).toBe(expected);
    });

    it('return right characters', () => {
        const expected = ['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'];
        const actual = SUT(str).characters;
        expect(actual).toEqual(expected);
    });

    it('return right extraInfo', () => {
        const expected = {};
        const actual = SUT(str).extraInfo;
        expect(actual).toEqual(expected);
    });
});

describe('calculateComplexity test suite', () => {
    it('calculates complexity of a string', () => {
        /**
         * Stub object to test the function
         * Stub - incomplete / minimal implementation of an object
         * Note - if TypeScript complains about the type, you can use any - it is a common practice in testing
         */
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo',
            },
        };

        // someInfo is just a stub object to test the function, it does not have to be a StingInfo object
        const actual = calculateComplexity(someInfo as any);
        const expected = 7; // 5 + 2
        expect(actual).toBe(expected);
    });
});
