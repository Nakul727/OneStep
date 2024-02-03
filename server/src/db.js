const { Pool } = require('pg');
const pgp = require('pg-promise')();
const db = pgp('postgres://test:test_p@localhost:5432/onestep');

const pool = new Pool({
  user: 'test',
  pass: 'test_p',
  host: 'localhost',
  port: 5432,
  database: 'OneStep',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  db,
};
