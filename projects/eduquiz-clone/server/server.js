const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    const query = url.parse(req.url,true).query;
    fetch(query.url, {
        mode: 'cors'
    })
        .then(function (response) {
            return response.json();
        }).then(data => {
            const questions = data.data[0].questions.map(question => ({
                ...question,
                trueAnswer: question.answers.find(answer => !!answer.is_correct)
            }))
            res.end(JSON.stringify({
                ...data.data[0],
                questions
            }));
        })
});

server.listen(8000); 
