import { useMemo } from 'react';


const Question = ({questionObj, selectAnswer, choosenAnswer, timeOver}) => {

    const {category, question, correctAnswer, incorrectAnswers} = questionObj;

    // Concat answers in one array and mix them
    const getQuestions = useMemo(() => {
        let questArr = [correctAnswer, ...incorrectAnswers];
        questArr.sort(() => Math.random() -0.5);
        return questArr;
    },[question]);

    const answers = getQuestions.map((elem, index) => {
        let clazz = elem === choosenAnswer
                            ? "quiz__answer quiz__answer_active"
                            : "quiz__answer";
        
        if (timeOver && elem === correctAnswer) {
            clazz += " quiz__answer_correct";
        }

        return (
            <p className={clazz}
               onClick={() => selectAnswer(elem)}>
                {`${index + 1}: ${elem}`}
            </p>
        )
    })

    
    return (
        <div className="quiz">
            <h4 className="quiz__cat">{category}</h4>
            <div className="quiz__quest">{question}</div>
            <div className="quiz__options">
                {answers}
            </div>
        </div>
    )
}

export default Question;
