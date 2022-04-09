import { useContext } from "react";

import { QuizContext } from '../contexts/quiz';
import Question from "./Question";




const Quiz = () => {
    const [stateContext, dispatch] = useContext(QuizContext);

    return (
        <div className="quiz">

            {stateContext.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="result-info">
                        <div>You have complete the quiz</div>
                        <div>You've got 4 of 8</div>
                        <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                    </div>
                </div>
            )}

            {!stateContext.showResults && (
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