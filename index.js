const express = require('express');
const morgan = require('morgan');
const questions = require('./routes/questions');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/qa/questions', questions);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});