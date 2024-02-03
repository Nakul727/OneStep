const express = require('express');
const { db } = require('../db');

const router = express.Router();

router.post('/add_habit', async (req, res) => {
    const { user_id, habit_name, start_date, end_date } = req.body;

    console.log('Request body:', req.body);

    try {
        await db.none('INSERT INTO habits (user_id, habit_name, start_date, end_date) VALUES ($1, $2, $3, $4)', [
            user_id,
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

router.get('/get_habits/:userId', async (req, res) => {
    const { userId } = req.params;

    console.log('User ID:', userId);

    const sqlQuery = 'SELECT * FROM habits WHERE user_id = $1';
    console.log('SQL Query:', sqlQuery);

    try {
        const habits = await db.any(sqlQuery, [userId]);
        res.status(200).json({ status: 'success', habits: habits });
    } catch (err) {
        console.error('Error:', err.message);
        console.error('Stack:', err.stack);
        res.status(500).json({ status: 'error', message: 'Error getting habits' });
    }
});

module.exports = router;
