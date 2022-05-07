// Needs a get, post, and delete(bonus) request
// Ref: 11-01-13

// API Route
// constants:
const notes = require('express').Router();
const fs = require('fs');

// write to file
// const writeToFile()


// Get 
notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
    console.info(req.rawHeaders);
    console.info(`${req.method} request received`);
});

// Post
notes.post('/notes', (req, res) => {
    
})


// Delete
// How do I specify which one gets deleted? index.js has an "ID" line?
// notes.delete


// export
module.exports = notes;