import { type FC } from 'react';

type GameOverProps = {
    winner?: string | null;
    onRestart: () => void;
};

const GameOver: FC<GameOverProps> = ({ winner, onRestart }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>The winner is: {winner}</p>}
            {!winner && <p>It's a draw!</p>}
            <button onClick={onRestart}>Rematch!</button>
        </div>
    );
};

export default GameOver;
