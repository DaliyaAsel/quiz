import { createContext, useReducer } from "react";

import { shuffleAnswer, normalizeQuestions } from '../helpers';


const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    error: "Error",
    showResults: false,
    answers: [],
    currentAnswer: '',
    countCorrectAnswers: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "NEXT_QUESTION":
            const showResults = state.currentQuestionIndex === state.questions.length - 1; //возвращает true или false
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1; //если квиз закончен, то мы не должны увеличивать индекс
            const answers = showResults ? [] : shuffleAnswer(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults, //либо мы ее всегда перезаписываем на false пока не закончим квиз, либо на true, если вопросы закончились.
                answers,
                currentAnswer: '',
            }
        case "RESTART":
            return initialState;

        case "SELETC_ANSWER":
            const countCorrectAnswers = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.countCorrectAnswers + 1 : state.countCorrectAnswers;
            return {
                ...state,
                currentAnswer: action.payload,
                countCorrectAnswers,
            }

        case "LOADED_QUESTIONS":
            const normalizeQ = normalizeQuestions(action.payload);
            return {
                ...state,
                questions: normalizeQ,
                answers: shuffleAnswer(normalizeQ[0]),
            };

        default:
            return state;
    }
}


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

