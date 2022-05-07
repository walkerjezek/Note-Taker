// Needs a get, post, and delete(bonus) request
// Ref: 11-01-13

// constants:
const notes = require('express').Router();
const fs = require('fs');
const util = require('util');


// read file from db/db.json

// write to file at db/db.json


// Get 
notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
    console.info(req.rawHeaders);
    console.info(`${req.method} request received`);
});

// Post
notes.post('/notes', (req, res) => {
    res.json(`${req.method} request received`);
    console.info(req.rawHeaders);
    console.info(`${req.method} request received`);
});



// Delete
// How do I specify which one gets deleted? index.js has an "ID" line?
// notes.delete


// Export
module.exports = notes;