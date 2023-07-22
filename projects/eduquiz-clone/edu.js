

fetch('https://api-gw.eduquiz.vn/quiz/api/v1/public/exams/15058/sections?bizapp=PESTHUBT&is_question_shuffle=0&is_answer_shuffle=1&allow_access_exam=true', {
    mode: 'cors'
})
    .then(function (response) {
        return response.json();
    }).then(res => {
        console.log(res);
    })