const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// Route
const api = require('./routes/htmlRoute.js');

// express server
const app = express();

// Set the port to 3001 or whatever is available
const PORT = process.env.PORT || 3001

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// Jay mentioned using other routes?
app.use('/api', api);

// route homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

// route notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// other takes you to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});


// Listener from 11-01-24
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);