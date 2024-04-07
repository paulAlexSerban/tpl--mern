import { ReactNode, type FC, type ChangeEvent } from 'react';
import { useState } from 'react';

type PlayerProps = {
    initName: string;
    symbol: string;
    isActive: boolean;
    onChangeName: (playerSymbol: string, newName: string) => void;
};

const Player: FC<PlayerProps> = ({ initName, symbol, isActive, onChangeName }) => {
    const [playerName, setPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    };

    const handlePlayerChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    const PlayerName: ReactNode = isEditing ? (
        <input type="text" value={playerName} required onChange={handlePlayerChangeName} />
    ) : (
        <span className="player-name">{playerName}</span>
    );

    return (
        <li className={isActive ? 'active' : undefined}>
            <div className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
            </div>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};

export default Player;
