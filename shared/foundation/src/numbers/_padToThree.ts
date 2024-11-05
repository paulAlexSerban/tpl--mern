/**
 * padToThree - adds 0s to the front of a number to make it 3 digits long
 * @param {*} number
 * @returns {string | number} - the number as a string with 0s added to the front
 * test comment
 */
const padToThree = (number: number): string | number => {
    return number <= 999 ? `00${number}`.slice(-3) : number;
};

export default padToThree;
