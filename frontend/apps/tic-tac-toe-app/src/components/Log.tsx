import { type FC } from 'react';

type LogProps = {
    turns: Array<{
        square: {
            row: number;
            col: number;
        };
        player: string;
    }>;
};

const Log: FC<LogProps> = ({ turns }) => {
    return (
        <ol id="log">
            {turns.map((turn) => {
                const { player, square } = turn;
                const { row, col } = square;
                return (
                    <li key={`${row}${col}`}>
                        <p>
                            {player} selected square {row}, {col}
                        </p>
                    </li>
                );
            })}
        </ol>
    );
};

export default Log;
