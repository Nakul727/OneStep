const express = require('express');
const { db } = require('../db');

const router = express.Router();

router.post('/add_habit', async (req, res) => {
    const { habit_name, start_date, end_date } = req.body;

    console.log('Request body:', req.body);

    try {
        await db.none('INSERT INTO habits (habit_name, start_date, end_date) VALUES ($1, $2, $3)', [
            habit_name,
            start_date,
            end_date,
        ]);
        res.status(200).json({ status: 'success', message: 'Habit added successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ status: 'error', message: 'Error adding habit' });
    }
});

module.exports = router;
