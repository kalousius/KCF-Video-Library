const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

// Replace these with your database connection details
const pool = new Pool({
  user: 'Alousius',
  host: 'localhost',
  database: 'kcf_video_library',
  password: 'Alousius@098765',
  port: 5432,
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (!err) {
    console.log('Connected to the database');
  } else {
    console.error('Error connecting to the database', err);
  }
});

// Start the Express server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define the user registration route
app.post('/api/register', async (req, res) => {
  const { full_name, email, username, password, role } = req.body;

  // Basic validation, you can add more
  if (!full_name || !email || !username || !password || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insert the user into the "users" table
    const query = 'INSERT INTO users (full_name, email, username, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [full_name, email, username, password, role];
    const result = await pool.query(query, values);

    res.status(201).json({ success: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
