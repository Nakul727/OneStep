// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Middleware
app.use(bodyParser.json());

// Define routes
const taskRouter = require('./src/api/task');
app.use('/api/tasks', taskRouter);

// Define endpoint to fetch tasks
taskRouter.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define endpoint to add a new task
taskRouter.post('/add', async (req, res) => {
  try {
    const { name, message } = req.body;
    const query = 'INSERT INTO tasks (name, message) VALUES ($1, $2)';
    await pool.query(query, [name, message]);
    
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
