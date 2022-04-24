import { useContext, useEffect } from "react";

import { QuizContext } from '../contexts/quiz';
import Question from "./Question";


const Quiz = () => {
    const [stateContext, dispatch] = useContext(QuizContext);

    const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

    useEffect(() => {
        if (stateContext.questions.length > 0) {
            return
        }

        fetch(apiUrl)
            .then(res => {
                return res.json()
            })
            .then(data => {
                dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
            })
    });

    return (
        <div className="quiz">

            {stateContext.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="result-info">
                        <div>You have complete the quiz</div>
                        <div>You've got {stateContext.countCorrectAnswers} of {stateContext.questions.length} </div>
                        <div className="next-button" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
                    </div>
                </div>
            )}

            {!stateContext.showResults && stateContext.questions.length > 0 && (
                <div>
                    <div className="score"> Вопрос {stateContext.currentQuestionIndex + 1}/{stateContext.questions.length} </div>
                    <Question />
                    <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION" })}> Next </div>
                </div>
            )}
        </div>
    )
}

export default Quiz;