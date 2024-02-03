const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokens = require('../utils/tokens');
const { db } = require('../db.js');

const express = require('express');
const router = express.Router();

// TODO - make these secret
const saltNum = 10;
const secret = 'secret_phrase';

//
// Helper functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

// check email
// returns false if an email already exists in db
async function checkEmail(email) {
  try {
    result = await db.query('SELECT * FROM Users WHERE email=$1', email);
    if (result.length > 0) {
      return [true, null];
    } else {
      return [false, null];
    }
  } catch (err) {
    console.error(err);
    return [null, new Error('server error')];
  }
}

// returns true if associated account's password is correct
async function verifyPassword(attempt, pass) {
  try {
    result = bcrypt.compareSync(attempt, pass);

    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

//
// Routes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
router.post('/register', async (req, res) => {
  // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  try {
    // check if input not null
    if (!req.body) {
      res.status(400).json({ error: 'missing body' });
      return;
    }

    const { name, email, password } = req.body;
    // hash password
    const securePassword = await bcrypt.hash(password, saltNum);

    // check if account with email already exists
    emailCheck = await checkEmail(email);
    if (emailCheck[0]) {
      res.status(400).json({ error: 'user with email already exists' });
      return;
    } else if (emailCheck[1]) {
      res.status(500).json({ error: 'internal server error' });
      return;
    }

    // insert values into db
    db.query('INSERT INTO Users(name, password, email) VALUES ($1, $2, $3)', [
      name,
      securePassword,
      email,
    ])
      .then((value) => {
        res.status(201).send('posted account with email ' + name);
        console.log('201 - posted to Users with name ' + name);
      })
      .catch((err) => {
        res.status(500).json({ error: 'server error' });
        console.log(err); // for debugging
        return;
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
    return;
  }
});

router.post('/login', async (req, res) => {
  password = req.body.password;
  email = req.body.email;

  if (!email || !password) {
    res.status(400).send('Please enter email and password');
    return;
  }

  try {
    // select from database with matching email
    result = await db.query('SELECT * FROM Users WHERE email=$1', email);

    // verify acc with email exists
    if (result.length == 0) {
      res.status(400).json({ error: 'No user with email exists' });
      return;
    }

    const account = result[0];

    // verify given password
    verifyPass = await verifyPassword(password, result[0].password);
    if (!verifyPass) {
      res.status(400).json({ error: 'Password incorrect' });
      return;
    }

    // log in if successful
    // TODO - create secret value
    const accessToken = jwt.sign(account, secret);
    res.status(200).json({ token: accessToken });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'server error' });
    return;
  }
});

module.exports = router;
