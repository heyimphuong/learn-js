

fetch('http://localhost:8000/?url=https://api-gw.eduquiz.vn/quiz/api/v1/public/exams/60014/sections?bizapp=EDUQUIZ&is_question_shuffle=0&is_answer_shuffle=1&allow_access_exam=true')
    .then(function (response) {
        return response.json();
    }).then(data => {
        const questions = data.questions.map(question => ({
            ...question,
            trueAnswer: question.answers.find(answer => !!answer.is_correct)
        }))
        console.log(JSON.stringify({
            ...data,
            questions
        }));
    })