const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: async (text, params) => pool.query(text, params),
};