import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";

import { createPlayer1, createPlayer2 } from "../../reducers";


const PlayersForm = () => {

    const [players, setPlayers] = useState(2);
    const dispatch = useDispatch();

    const chooseMode = (num) => {
        setPlayers(num);
    };

    const createPlayers = (data) => {
        switch(players) {
            case 1: {
                dispatch(createPlayer1(data.player1));
                break;
            }
            case 2: {
                dispatch(createPlayer1(data.player1));
                dispatch(createPlayer2(data.player2));
                break;
            }
            default: {
                console.log('Something went wrong');
            }
        }
    }

    
    return (
        <div className="players-form form form_start-animation">
                <h3 className="players-form__title title">How much players?</h3>
                {createContent(players, chooseMode, createPlayers)}
        </div>
    )
}

function createContent(players, chooseMode, createPlayers) {

    const numberOfPlayers = () => {

        const clazz = (num) => {
            return num === players 
                        ? "players-form__num players-form__num_active"
                        : "players-form__num"
        };

        return (
            <div className="players-form__qtty">
                <div className={clazz(1)}
                     onClick={() => chooseMode(1)}>
                    1
                </div>
                <div className={clazz(2)}
                     onClick={() => chooseMode(2)}>
                    2
                </div>
            </div>
        )
    };

    const playersInput = () => {
        switch (players) {
            case 1: return (
                <Formik 
                    initialValues={{
                        player1: ''
                    }}
                    validationSchema={Yup.object({
                        player1: Yup.string()
                                    .min(2, "At least 2 characters")
                                    .required("Enter your name")
                    })}
                    onSubmit={createPlayers}>
                    <Form className="players-form__names">
                        <div className="players-form__player">
                            <label htmlFor="player">Player:</label>
                            <Field name="player1" placeholder="Enter your name"/>
                        </div>
                        <button className="players-form__btn button"
                                type="submit">
                            NEXT
                        </button>
                    </Form>
                </Formik>
            );
            case 2: return (
                <Formik 
                        initialValues={{player1: '', player2: ''}}
                        validationSchema={Yup.object({
                            player1: Yup.string()
                                        .min(2, "At least 2 characters")
                                        .required("Enter your name"),
                            player2: Yup.string()
                                        .min(2, "At least 2 characters")
                                        .required("Enter your name")
                        })}
                        onSubmit={createPlayers}>
                    <Form className="players-form__names">
                        <div className="players-form__player">
                            <label htmlFor="player1">Player 1:</label>
                            <Field name="player1" placeholder="Enter your name"/>
                        </div>
                        <div className="players-form__player">
                            <label htmlFor="player2">Player 2:</label>
                            <Field name="player2" placeholder="Enter your name"/>
                        </div>
                        <button className="players-form__btn button"
                                type="submit">
                            NEXT
                        </button>
                    </Form>
                </Formik>
            )
            default: {
                console.log('Something went wrong');
            }
        }
    };

    
    return (
        <>
            {numberOfPlayers()}
            {playersInput()}
        </>
    )

}


export default PlayersForm;