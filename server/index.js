const express = require('express');
const morgan = require('morgan');
const questions = require('./routes/questions');
// const answers = require('./routes/answers');


const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(express.json());

// ROUTES FOR QUESTIONS
app.use('/qa/questions', questions);

// ROUTES FOR ANSWERS
// app.use('/qa/answers', answers);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});