import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import PlayerName from '../../playerName/PlayerName';
import NoPlayer from "../../noPlayer/NoPlayer";
import { oneMoreGame } from "../../../reducers";


const ScorePage = () => {

    const {player1, player2, games} = useSelector(state => state);
    const numOfQuestions = useSelector(state => state.conditions.num);
    const dispatch = useDispatch();

    const arr = [player1, player2];

    const score = arr.map((player, index) => {
        if(player) {
            const clazz = index=== 0 ? 'player-name' : 'player-name player-name_second';
            const correct = player.right ? player.right : 0;
            const total = numOfQuestions * games;
            
            return (
                <div className="scores__item">
                    <PlayerName name={player.name} classes={clazz}/>
                    <div className="scores__answers">
                        <p className="scores__total">{`Questions: ${total}`}</p>
                        <p className="scores__right">{`Correct answers: ${correct}`}</p>
                        <p className="scores__wrong">{`Wrong answers: ${total - correct}`}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    });

    const createContent = () => {
        if(player1) {
            return (
                <>
                    {score}
                    <Link to="/game">
                        <button className="button" 
                                onClick={() => dispatch(oneMoreGame())}>ONE MORE TIME?</button>
                    </Link>
                </>
            )
        } else {
            return <NoPlayer/>
        }
    }

    const content = createContent();

    
    return (
        <div className="container">
            <div className="scores">
                <Helmet>
                    <meta
                        name="description"
                        content="Scores of QUIZ!"/>
                    <title>GAME SCORE</title>
                </Helmet>
                {content}
                <div className="scores__thanks">
                    Much thanks to team of 
                    <br/><b> <a href="https://the-trivia-api.com">THE TREVIA API</a></b><br/>  
                    for questions and their great API
                </div>
            </div>
        </div>
    )
}

export default ScorePage;