const express = require('express');
const Router = require('express-promise-router');
const db = require('/Users/gea/Desktop/HR/hr-sea16/SDC/Catwalk-QA/db/index.js');

const router = new Router();

// router.get('/', (req, res) => {
//   res.send('request to root successful');
// })
router.get('/:productId', async (req, res) => {
  const text = 'SELECT * FROM questions WHERE product_id = $1'
  // const text = 'SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id WHERE product_id = $1';
  const values = [req.params.productId];
  console.log('psql values', values);

  const response = await db.query(text, values);
  console.log(response.rows)
  res.send(response.rows);
});

module.exports = router;