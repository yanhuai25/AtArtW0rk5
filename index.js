const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to ArtWorks! Discover your inner artist with our online art courses.');
});

app.get('/courses', (req, res) => {
  res.send('Explore our wide range of art courses, designed to be accessible to anyone, regardless of experience level.');
});

app.get('/register', (req, res) => {
  res.send('Ready to unleash your creativity? Register for our courses today!');
});

// Start the server
app.listen(3000, () => {
  console.log('ArtWorks server is running on port 3000.');
});