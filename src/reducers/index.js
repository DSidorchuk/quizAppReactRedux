import { createAction, createReducer } from "@reduxjs/toolkit";


export const createPlayer1 = createAction('CREATE_PLAYER_1');
export const createPlayer2 = createAction('CREATE_PLAYER_2');
export const setNumOfQuest = createAction('SET_NUMBER_OF_QUESTIONS');
export const setDiff = createAction('SET_DIFFICULTY');
export const setTime = createAction('SET_TIME');
export const questLoading = createAction('QUESTIONS_LOADING');
export const questLoadingError = createAction('QUESTONS_LOADING_ERROR');
export const setQuestionsList = createAction('SET_QUESTIONS_LIST');
export const rightAnswer1 = createAction('RIGHT_ANSWER_PLAYER1');
export const rightAnswer2 = createAction('RIGHT_ANSWER_PLAYER2');
export const oneMoreGame = createAction('ONE_MORE_GAME');


const initialState = {
    player1: null,
    player2: null,
    questions: '',
    loadingStatus: 'idle',
    conditions: {
        num: 3, 
        diff: 'medium',
        time: 30
    },
    games: 1
};

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(createPlayer1, (state, action) => {
            state.player1 = {name: action.payload}
        })
        .addCase(createPlayer2, (state, action) => {
            state.player2 = {name: action.payload}
        })
        .addCase(setNumOfQuest, (state, action) => {
            state.conditions.num = action.payload;
        })
        .addCase(setDiff, (state, action) => {
            state.conditions.diff = action.payload;
        })
        .addCase(setTime, (state, action) => {
          state.conditions.time = action.payload;
        })
        .addCase(questLoading, state => {state.loadingStatus = 'loading'} )
        .addCase(questLoadingError, state => {state.loadingStatus = 'error'})
        .addCase(setQuestionsList, (state, action) => {
            state.loadingStatus = 'idle';
            state.questions = action.payload;
        })
        .addCase(rightAnswer1, state => {
            if (state.player1.right) {
                state.player1.right ++; 
            } else {
                state.player1.right = 1
            }
        })
        .addCase(rightAnswer2, state => {
            if (state.player2.right) {
                state.player2.right ++; 
            } else {
                state.player2.right = 1
            }
        })
        .addCase(oneMoreGame, state => {state.games++});
});

export default reducer;


// [
//   {
//     category: "Sport & Leisure",
//     id: "622a1c367cc59eab6f9500e0",
//     correctAnswer: "Celtics",
//     incorrectAnswers: [
//       "Bruins",
//       "Marlins",
//       "Bellringers"
//     ],
//     question: "Basketball: The Boston ___________.",
//     tags: [
//       "basketball",
//       "nba",
//       "names",
//       "boston",
//       "sport"
//     ],
//     type: "Multiple Choice",
//     difficulty: "medium",
//     regions: [],
//     isNiche: false
//   },
//   {
//     category: "History",
//     id: "622a1c367cc59eab6f9503ab",
//     correctAnswer: "Germany",
//     incorrectAnswers: [
//       "Korea",
//       "Vietnam",
//       "Ireland"
//     ],
//     question: "Which country was split into two zones by the Yalta agreement?",
//     tags: [
//       "politics",
//       "cold_war",
//       "history"
//     ],
//     type: "Multiple Choice",
//     difficulty: "medium",
//     regions: [],
//     isNiche: false
//   },
//   {
//     category: "Music",
//     id: "6266bc2dff2394bd44dedffd",
//     correctAnswer: "Gong",
//     incorrectAnswers: [
//       "French Horn",
//       "Bagpipe",
//       "Fife"
//     ],
//     question: "Which of these is a percussion instrument?",
//     "tags": [
//       "music"
//     ],
//     type: "Multiple Choice",
//     difficulty: "medium",
//     regions: [],
//     isNiche: false
//   },
//   {
//     category: "Film & TV",
//     id: "622a1c347cc59eab6f94f961",
//     correctAnswer: "Ghost",
//     incorrectAnswers: [
//       "Apocalypse Now",
//       "Blue Velvet",
//       "Terms of Endearment"
//     ],
//     question: "Which film contains the character 'Oda Mae Brown'?",
//     tags: [
//       "film",
//       "fictitious_characters",
//       "film_and_tv"
//     ],
//     type: "Multiple Choice",
//     "difficulty": "medium",
//     "regions": [],
//     "isNiche": false
//   },
//   {
//     category: "History",
//     id: "63989c145c9a75021f31047e",
//     correctAnswer: "17th century",
//     incorrectAnswers: [
//       "18th century",
//       "19th century",
//       "20th century"
//     ],
//     question: "In which century did the Thirty Years' War take place?",
//     tags: [
//       "history",
//       "wars",
//       "europe"
//     ],
//     type: "Multiple Choice",
//     difficulty: "medium",
//     regions: [],
//     isNiche: false
//   },
//   {
//     category: "History",
//     id: "63989c145c9a75021f31047e",
//     correctAnswer: "17th century",
//     incorrectAnswers: [
//       "18th century",
//       "19th century",
//       "20th century"
//     ],
//     question: "In which century did the Thirty Years' War take place?",
//     tags: [
//       "history",
//       "wars",
//       "europe"
//     ],
//     type: "Multiple Choice",
//     difficulty: "medium",
//     regions: [],
//     isNiche: false
//   }
// ]