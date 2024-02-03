const express = require('express');
const { db } = require('../db');

const router = express.Router();

router.post('/add_task', async (req, res) => {
    const { name, message } = req.body;

    console.log('Request body:', req.body);

    try {
        await db.none('INSERT INTO task (name, message) VALUES ($1, $2)', [
            name,
            message,
        ]);
        res.status(200).json({ status: 'success', message: 'Task added successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ status: 'error', message: 'Error adding task' });
    }
});

module.exports = router;
