import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setDiff, setNumOfQuest, setTime } from "../../reducers";


const ConditionForm = () => {

    const {num, diff, time} = useSelector(state => state.conditions);
    const dispatch = useDispatch();

    const numsArr = [3, 7, 10];
    const diffsfArr = ['easy', 'medium', 'hard'];
    const timeArr = [15, 30, 45];

    const createCondition = (initVal, arr, action) => {
        return arr.map(elem => {
            const clazz = elem === initVal
                                ? "condition-form__block-item condition-form__block-item_active"
                                : "condition-form__block-item"
            
            return (
                <p className={clazz}
                   onClick={() => dispatch(action(elem))}
                   key={elem}>
                    {elem}
                </p>
            )
        })
    };

    const nums = createCondition(num, numsArr, setNumOfQuest);
    const diffs = createCondition(diff, diffsfArr, setDiff);
    const timeForAnsw = createCondition(time, timeArr, setTime);


    return (
        <div className="condition-form form form_start-animation">
            <h2 className="condition-form__title title">Choose mode</h2>
            <h3 className="condition-form__subtitle">Number of questions</h3>
            <div className="condition-form__block">
                {nums}
            </div>
            <h3 className="condition-form__subtitle">Difficulty</h3>
            <div className="condition-form__block">
                {diffs}
            </div>
            <h3 className="condition-form__subtitle">Time for answer</h3>
            <div className="condition-form__block">
                {timeForAnsw}
            </div>
            <Link to="/game">
                <button className="condition-form__btn button">START</button>
            </Link>
        </div>
    )
}

export default ConditionForm;