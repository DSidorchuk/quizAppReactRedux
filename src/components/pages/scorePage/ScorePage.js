import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import PlayerName from '../../playerName/PlayerName';
import { oneMoreGame } from "../../../reducers";


const ScorePage = () => {

    const {player1, player2, games} = useSelector(state => state);
    const numOfQuestions = useSelector(state => state.conditions.num);
    const dispatch = useDispatch();

    const arr = [player1, player2];

    const content = arr.map((player, index) => {
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
        }
    })

    
    return (
        <div className="scores">
            {content}
            <Link to="/game">
                <button className="button" onClick={() => dispatch(oneMoreGame())}>ONE MORE TIME?</button>
            </Link>

        </div>
    )
}

export default ScorePage;