import { randomWord } from '../../src/tools';
import { ENGLISH_WORDS } from '../../src/constants';
describe('randomWords test suite', () => {
    test('returns a random word from the given array', () => {
        const result = randomWord();
        expect(ENGLISH_WORDS).toContain(result);
    });
});
