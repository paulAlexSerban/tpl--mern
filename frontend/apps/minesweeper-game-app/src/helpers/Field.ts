export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
    empty: 0,
    bomb: 9,
    hidden: 10,
    mark: 11,
    weakMark: 12,
};

export const fieldExample: Field = [
    [9, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [3, 3, 1, 0, 0, 0, 0, 1, 9, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [9, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 9, 1, 0, 0, 0, 0, 0, 0],
];
