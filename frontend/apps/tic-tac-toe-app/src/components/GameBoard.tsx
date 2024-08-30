import { type FC } from 'react';

type Row = Array<string | null>;

type GameBoardProps = {
    onSelectSquare: (rowIndex: number, cellIndex: number) => void;
    board: Row[];
};

const GameBoard: FC<GameBoardProps> = ({ onSelectSquare, board }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const handleSelectedSquare = (rowIndex: number, cellIndex: number) => {
    //     /**
    //      * BEST PRACTICE (to avoid side effects):
    //      * Objects & arrays (which technically are objects) are reference values in JavaScript.
    //      * You should therefore NOT MUTATE them directly - instead create a DEEP COPY first.
    //      */
    //     setGameBoard((prevGameBoard) => {
    //         // crete a DEPP COPY via the spread operator
    //         const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
    //         // editing the copy not the original
    //         updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // };
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, cellIndex) => {
                                return (
                                    <li key={cellIndex}>
                                        <button
                                            onClick={() => onSelectSquare(rowIndex, cellIndex)}
                                            disabled={playerSymbol !== null}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
};

export default GameBoard;
