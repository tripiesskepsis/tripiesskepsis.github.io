const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// API endpoint to handle user input
app.post('/api/user-input', (req, res) => {
  // Extract user input from the request body
  const userInput = req.body;

  // Save the userInput to the database

  // Return a response
  res.status(200).json({ message: 'User input saved successfully.' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});