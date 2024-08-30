/**
 * padToThree - adds 0s to the front of a number to make it 3 digits long
 * @param {*} number
 * @returns
 */
const padToThree = (number: number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default padToThree;
