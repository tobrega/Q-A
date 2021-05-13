const express = require('express');
const Router = require('express-promise-router');
const db = require('.../db');

const router = new Router();

// router.get('/:productId', async (req, res) => {
//   console.log('req params', req.params)
//   const text = 'SELECT * FROM questions WHERE product_id = $1'
//   const values = [req.params.productId]
//   console.log('psql values', values)

//   const response = await db.query(psql, values);
//   console.log(response.rows[0])
//   res.send(response.rows);
//   await client.end()
// });

router.get('/:productId', (req, res) => {
  // console.log('req params', req.params)
  res.send('get successful');
});


module.exports = router;