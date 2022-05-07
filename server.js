const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// Route
const api = require('./routes/htmlRoute.js');

// Set app = express server
const app = express();

// Set the port to 3001 or whatever is available
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// Jay mentioned using modular routing
app.use('/api', api);

// For the routes look at week 11 classes
// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

// Other takes you to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

// Route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// Listener from 11-01-24
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀 `)
);