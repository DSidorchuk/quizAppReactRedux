import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { rightAnswer1 } from "../../reducers";
import PlayerName from "../playerName/PlayerName";
import Game from "../game/Game";
import '../../styles/style.scss';

const SingleGame = () => {
    const [gameOver, setGameOver] = useState(false);

    const playerName = useSelector(state => state.player1.name);
    const questions = useSelector(state => state.questions);

    const player = <PlayerName 
                        name={playerName} 
                        classes={'player-name player-name_game player-name_game-animation'}/>;

    const endGame = () => {
        setGameOver(true);
    };

    const scoresLink = <Link to="/scores">
                            <button className="button button_finish">SHOW RESULT</button>
                       </Link>;

    const game = <Game player={player}
                       endGame={endGame}
                       questions={questions}
                       setRightAnswer={rightAnswer1}/>;
    
    const content = gameOver ? scoresLink : game;

    return (
        <div className="form form-game">
            {content}
        </div>

    )
}


export default SingleGame;

