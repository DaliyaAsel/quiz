//здесь будут храниться правильные и неправильные ответы на вопрос
export const shuffleAnswer = question => {
    const unshuffledAnswers = [question.correctAnswer, ...question.incorrectAnswers];  // массив 4 ответов на стр

    return unshuffledAnswers.map(unshuffledAnswers => ({ sort: Math.random(), value: unshuffledAnswers })).sort((a, b) => a.sort - b.sort).map((el) => el.value); //  чтобы каждый раз ответы на вопросы располагались в рандомном порядке
}

export const normalizeQuestions = backendQuestions => {
    return backendQuestions.map(backendQuestions => {
        const incorrectAnswers = backendQuestions.incorrect_answers.map(incorrectAnswers =>  decodeURIComponent(incorrectAnswers));

        return {
            correctAnswer: decodeURIComponent(backendQuestions.correct_answer), // correct_answer это данные с api и они закодированы
            question: decodeURIComponent(backendQuestions.question), // question это данные с api и они закодированы
            incorrectAnswers: incorrectAnswers,
        }
    })
}