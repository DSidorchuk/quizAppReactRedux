import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PlayerName from "../playerName/PlayerName";
import { rightAnswer1, rightAnswer2 } from "../../reducers";
import Game from "../game/Game";
import '../../styles/style.scss';


const TwinGame = () => {

    const [gameOver, setGameOver] = useState(false);
    const [nextRound, setNextRound] = useState(false);
    const [player, setPlayer] = useState();

    const playerName1 = useSelector(state => state.player1.name);
    const playerName2 = useSelector(state => state.player2.name);
    const questions = useSelector(state => state.questions);
    const numOfQuest = useSelector(state => state.conditions.num);

    const player1 = {
        name: playerName1,
        componentSelect: <PlayerName name={playerName1} classes={'player-name'}/>,
        componentGame: <PlayerName name={playerName1} classes={'player-name player-name_game player-name_game-animation'}/>,
        rightAnswer: rightAnswer1,
        questions: questions.slice(0, numOfQuest)
    };
    const player2 = {
        name: playerName2,
        componentSelect: <PlayerName name={playerName2} classes={'player-name player-name_second'}/>,
        componentGame: <PlayerName name={playerName2} classes={'player-name player-name_second player-name_game player-name_second_game-animation'}/>,
        rightAnswer: rightAnswer2,
        questions: questions.slice(numOfQuest)
    };

    const selectPlayer = (name) => {
        name === player1.name ? setPlayer(player1) : setPlayer(player2);
    }

    const endGame = () => {
        setGameOver(true);
    }

    const goToNextRound = () => {
        setNextRound(true);
    }

    useEffect(() => {
        if(player) {
            player.name === player1.name ? selectPlayer(player2.name) : selectPlayer(player1.name);
        }
    }, [nextRound]);



    const selectFirstPlayer = !player 
                                     ?  <div className="first-player-selection">
                                            <h2 className="title first-player-selection__title">
                                                Who will be the first?
                                            </h2>
                                            <div className="first-player-selection__options">
                                                <div className="first-player-selection__name"
                                                        onClick={() => selectPlayer(player1.name)}>
                                                        {player1.componentSelect}
                                                </div>
                                                <div className="first-player-selection__name"
                                                        onClick={() => selectPlayer(player2.name)}>
                                                        {player2.componentSelect}
                                                </div>
                                            </div>
                                        </div>
                                     : null;
    
    const game1 = player ? <Game player={player.componentGame}
                                 endGame={goToNextRound}
                                 questions={player.questions}
                                 setRightAnswer={player.rightAnswer}/> 
                        : null;

    const game2 = player && nextRound ? <Game player={player.componentGame}
                                              endGame={endGame}
                                              questions={player.questions}
                                              setRightAnswer={player.rightAnswer}/> 
                                      : null;

    const scoresLink = gameOver ? <Link to="/scores">
                                    <button className="button button_finish">SHOW RESULT</button>
                                  </Link>
                                : null;

                                
    return (
        <div className="form form-game">
            {selectFirstPlayer}
            {game1}
            {game2}
            {scoresLink}
        </div>
    )
}

export default TwinGame;