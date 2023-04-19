import { useSelector} from "react-redux";

import PlayersForm from "../../playersForm/PlayersForm";
import ConditionForm from "../../conditionsForm/ConditionForm";
import PlayerName from "../../playerName/PlayerName";


const StartPage = () => {

    const {player1, player2} = useSelector(state => state);
    
    const classArr = ["player-name player-name_start-animation player-name_start",
                      "player-name player-name_start-animation player-name_second player-name_second_start"];

    const playerName1 = player1 
                        ? <PlayerName classes={classArr[0]} {...player1}/>
                        : null;

    const playerName2 = player2 
                        ? <PlayerName classes={classArr[1]} {...player2}/>
                        : null;


    return (
        <div className="container">
            {playerName1}
            {playerName2}
            { !player1 ? <PlayersForm/> : <ConditionForm/>}     
        </div>
    )
}

export default StartPage;
