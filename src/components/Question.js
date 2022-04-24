import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

import Answer from "./Answer";

const Question = () => {
    const [stateContext, dispatch] = useContext(QuizContext);
    const currentQuestion = stateContext.questions[stateContext.currentQuestionIndex]; // это индекс текущего вопроса

    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {
                    stateContext.answers.map((answer, i) => (
                        <Answer key={i} 
                        index={i}
                        answerText={answer} 
                        correctAnswer={currentQuestion.correctAnswer}
                        currentAnswer={stateContext.currentAnswer}
                        onSelectAnswer={(answerUsers) => dispatch({ type: "SELETC_ANSWER", payload: answerUsers })} />
                    ))
                }
            </div>

        </div>
    )
}

export default Question;