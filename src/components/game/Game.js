import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Timer from "../timer/Timer";
import Question from "../question/Question";
import '../../styles/style.scss';


const Game = ({player, endGame, questions, setRightAnswer}) => {
    const [start, setStart] = useState(false);
    const [timeOver, setTimeOver] = useState(false);
    const [choosenAnsw, setChoosenAnsw] = useState('');
    const [counter, setCounter] = useState(0);

    const disatch = useDispatch();

    const lastQuestion = counter === questions.length;

    useEffect(() => {
        setTimeOver(false);
        if(lastQuestion) {
            endGame();
        }
    }, [counter]);

    const clickNext = () => {
        if(choosenAnsw === questions[counter].correctAnswer) {
            disatch(setRightAnswer());
        }
        setCounter(counter => counter + 1);
        setTimeOver(true);
    }

    const clickStart = () => {
        setStart(true);
    }

    const timeEnd = () => {
        setTimeOver(true);
    }

    const selectAnswer = (answ) => {
        if (!timeOver) {
            setChoosenAnsw(answ);
        }
    }

    const playerName = !lastQuestion ? player : null;

    // Show start button if game hasn`t been started yet
    const startBtn = !start ? <button className="button button_start" onClick={clickStart}>
                                      START
                              </button> 
                            : null;
    
    // If game started and questions hasn`t ended show question
    const quiz = start && !lastQuestion  ? <Question questionObj={questions[counter]} 
                                    selectAnswer={selectAnswer} 
                                    choosenAnswer={choosenAnsw}
                                    timeOver={timeOver}/>
                        : null;

    // If game started and questions hasn`t ended show 'next' button
    const nextBtn = start && !lastQuestion ? <button className="button"
                                                        onClick={clickNext}>
                                                    NEXT
                                            </button> 
                                           : null;
    
    // If game started and questions hasn`t, and time doesn`t end show timer                              
    const timer = start && !timeOver && !lastQuestion ? <Timer timeEnd={timeEnd}/> 
                                                      : null;

    // If game started and questions hasn`t ended show button counter of questions                                                 
    const counterBox = start && !lastQuestion ? <div className="counter">
                                                    {`${counter + 1} / ${questions.length}`}
                                                </div> 
                                              : null;
                            
    return (
        <>
            {playerName}
            {counterBox}
            {startBtn}
            {timer}
            {quiz}
            {nextBtn}
        </>
    )
}

export default Game;