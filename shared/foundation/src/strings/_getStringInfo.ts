export type StingInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extraInfo: Object | undefined;
};

/**
 * getStringInfo - gets info about a string
 * @param {string} str
 * @returns {StingInfo}
 */

const getStringInfo = (str: string): StingInfo => {
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();
    const characters = Array.from(str);
    const length = str.length;
    const extraInfo = {};

    return {
        lowerCase,
        upperCase,
        characters,
        length,
        extraInfo,
    };
};

export default getStringInfo;
