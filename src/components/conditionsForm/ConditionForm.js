import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setDiff, setNumOfQuest } from "../../reducers";
import "../../styles/style.scss";

const ConditionForm = () => {

    const {num, diff} = useSelector(state => state.conditions);
    const dispatch = useDispatch();

    const numsArr = [3, 7, 10];
    const diffsfArr = ['easy', 'medium', 'hard'];

    const createCondition = (initVal, arr, baseClass, action) => {
        return arr.map(elem => {
            const clazz = elem === initVal
                                ? `${baseClass} ${baseClass}_active`
                                : baseClass
            
            return (
                <p className={clazz}
                   onClick={() => dispatch(action(elem))}
                   key={elem}>
                    {elem}
                </p>
            )
        })
    };

    const nums = createCondition(num, numsArr, "condition-form__num", setNumOfQuest);
    const diffs = createCondition(diff, diffsfArr, "condition-form__level", setDiff);


    return (
        <div className="condition-form form form_start-animation">
            <h2 className="condition-form__title title">Choose mode</h2>
            <h3 className="condition-form__subtitle">Number of questions</h3>
            <div className="condition-form__quest">
                {nums}
            </div>
            <h3 className="condition-form__subtitle">Difficulty</h3>
            <div className="condition-form__diff">
                {diffs}
            </div>
            <Link to="/game">
                <button className="condition-form__btn button">START</button>
            </Link>
        </div>
    )
}

export default ConditionForm;