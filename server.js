const express = require('express');
const app = express();

// Middleware
app.use(express.json());  // Parses incoming JSON requests

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example of a POST route
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.send(`Received data: ${name}, ${age}`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
