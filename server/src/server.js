const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

const { authenticateToken } = require('./utils/tokens');
const accounts = require('./api/accounts');
const journals = require('./api/journals');

app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/accounts', accounts);
app.use('/api/journals', journals);
app.use(authenticateToken);

// test function
app.get('/test', authenticateToken, async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
    hello
});

app.listen(8080, () => {
  console.log('listening on port 8080...');
});
