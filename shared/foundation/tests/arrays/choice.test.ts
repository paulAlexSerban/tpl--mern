import { randomChoice } from '../../src/arrays';

describe('randomChoice test suite', () => {
    test('returns a random element from the given array', () => {
        const arr = ['a', 'b', 'c'];
        const result = randomChoice(arr);
        expect(arr).toContain(result);
    });
});
