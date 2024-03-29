const express = require('express');
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');
const secret = 'secret_phrase';

const { authenticateToken } = require('./utils/tokens');

const accounts = require('./api/accounts');
const journals = require('./api/journals');
const habits = require('./api/habits');

app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/accounts', accounts);
app.use('/api/journals', journals);
app.use('/api/habits', habits);

app.use(authenticateToken);

async function validateToken (req, res, next) {
  const token = req.headers.authentication && req.headers.authentication.split(' ');
  if(!token) {
    console.log('!token');
    res.status(401).json({ error: 'no token' });
    return;
  }

  jwt.verify(token, secret, (err, decoded) => {
    console.log('verify');
    if(err) {
      res.status(403).json({ error: 'invalid token' });
    }

    req.user = decoded;
    next();
  });
};

// test function
app.get('/test', authenticateToken, async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
  hello;
});

app.listen(8080, () => {
  console.log('listening on port 8080...');
});

module.exports =  { validateToken }
