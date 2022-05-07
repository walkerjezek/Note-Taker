// Constants
const express = require('express');

const notes = require('./notes');

const app = express();

// Use notes
app.use('/notes', notes);


// Export
module.exports = app


