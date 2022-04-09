import { createContext, useReducer } from "react";
import data from '../data';


const initialState = {
    questions: data,
    currentQuestionIndex: 0,
    error: "Error",
    showResults: false,
}

const reducer = (state, action) => {
    if (action.type === "NEXT_QUESTION") {
        const showResults = state.currentQuestionIndex === state.questions.length - 1; //возвращает true или false
        const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1; //если квиз закончен, то мы не должны увеличивать индекс
        return {
            ...state,
            currentQuestionIndex,
            showResults, //либо мы ее всегда перезаписываем на false пока не закончим квиз, либо на true, если вопросы закончились.
        }
    }
    if(action.type === "RESTART") {
        return initialState
    }
    return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

