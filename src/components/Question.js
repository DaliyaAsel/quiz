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
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

        </div>
    )
}

export default Question;