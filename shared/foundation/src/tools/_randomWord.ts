import { randomChoice } from '../arrays';
import { ENGLISH_WORDS } from '../constants';

const randomWord = () => {
    return randomChoice(ENGLISH_WORDS);
};

export default randomWord;
