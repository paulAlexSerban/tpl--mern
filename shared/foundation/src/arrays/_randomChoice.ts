/**
 * Returns a random element from the given array.
 * @param {T[]} arr - The array to choose from.
 * @returns {T} A random element from the array.
 */
const randomChoice = <T>(arr: T[]): T => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export default randomChoice;
