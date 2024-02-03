const bcrypt = require('bcrypt');
const tokens = require('../utils/tokens');
const express = require('express');
const router = express.Router();
const { db } = require('../db');

//
// helpers
//
async function verifyJournalTitle(title, userID) {
  try {
    result = await db.query('SELECT * FROM Journals WHERE title=$1 AND userID=$2', [title, userID]);
    if (result.length > 0) {
      return [true, null];
    } else {
      return [false, null];
    }
  } catch (err) {
    return [null, err];
  }
}

//
// routes
//
router.post('/post-journal', async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: 'missing body' });
      return;
    }

    const userID = 1;
    const { title, description } = req.body;

    // the same user cannot make two journals with the same title
    const verified = await verifyJournalTitle(title, userID);
    if (verified[1] != null) {
      res.status(500).json({ error: verified[1] });
      return;
    }
    if (verified[0]) {
      res.status(400).json({ error: 'journal with title already exists' });
      return;
    }

    if (!title) {
      res.status(400).json({ error: 'missing title' });
    }

    db.query('INSERT INTO Journals(userid, title, description) VALUES ($1, $2, $3)', [
      userID,
      title,
      description,
    ])
      .then((result) => {
        res.status(201).send('successfully added journal');
        return;
      })
      .catch((error) => {
        res.status(500).json({ error: error });
        return;
      });
  } catch (err) {
    res.status(500).json({ error: err });
    return;
  }
});

router.get('/get-journals', async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: 'missing body' });
    }

    const { id } = req.body;
    db.query('SELECT * FROM Journals WHERE userid=$1', id)
      .then((value) => {})
      .catch();
  } catch (err) {}
});

router.post('/post-journal-entry', async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: 'missing body' });
      return;
    }

    // request should have an entry title, body, and category to distinguish entries
    const { title, body, category } = req.body;

    if (!title || !body || !category) {
      res.status(400).json({ error: 'one or more missing body fields' });
      return;
    }

    const date = new Date();
    const user = 'user';

    db.query(
      'INSERT INTO JournalEntries(title, body, category, user, date) VALUES ($1, $2, $3, $4, $5)',
      [title, body, category, user, date],
    )
      .then((value) => {
        res.status(201).send('posted to journal entries with title ' + title);
        return;
      })
      .catch((err) => {
        res.status(500).json({ error: 'server error: database problem' });
        return;
      });
  } catch (err) {}
});

module.exports = router;
