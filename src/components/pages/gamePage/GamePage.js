import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from 'react-helmet';

import {setQuestionsList, questLoading, questLoadingError} from '../../../reducers';
import { useHttp } from "../../../hooks/http.hook";
import Spinner from "../../spinner/Spinner";
import Error from "../../error/Error";
import SingleGame from "../../singleGame/SingleGame";
import TwinGame from "../../twinGame/TwinGame";
import NoPlayer from "../../noPlayer/NoPlayer";


const GamePage = () => {

    const {num, diff} = useSelector(state => state.conditions);
    const {player1, player2, questions} = useSelector(state => state);
    const loadingStatus = useSelector(state => state.loadingStatus);
    const dispatch = useDispatch();

    const {request} = useHttp();

    const url = player2 
                ? `https://the-trivia-api.com/api/questions?limit=${num*2}&difficulty=${diff}`
                : `https://the-trivia-api.com/api/questions?limit=${num}&difficulty=${diff}`;

    useEffect(() => {
        dispatch(questLoading());
        request(url)
                .then(data => dispatch(setQuestionsList(data)))
                .catch(() => dispatch(questLoadingError()));
        
        // eslint-disable-next-line 
    }, []);

    const createContent = () => {
        if(player1) {
            const spinner = loadingStatus === 'loading' ? <Spinner/> : null;
            const error = loadingStatus === 'error' ? <Error/> : null;
            const gameMode = player2 ? <TwinGame/> : <SingleGame/>;
            const quiz = questions && !spinner  ? gameMode : null;
            return [spinner, error, quiz]
        } else {
            return <NoPlayer/>
        }
    };

    const content = createContent();

    
    return (
        <div className="container">
            <Helmet>
                <meta
                    name="description"
                    content="Game page of QUIZ!"/>
                <title>GAME</title>
            </Helmet>
           {content}
        </div>
    )
}

export default GamePage;