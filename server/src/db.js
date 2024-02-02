const { Pool } = require('pg');

const pool = new Pool({
  user: 'test',
  pass: 'test_p',
  host: 'localhost',
  port: 5432,
  database: 'OneStep',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
