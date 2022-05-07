const express = require('express');

const notes = require('./notes');

const app = express();

// use notes
app.use('/notes', notes);

module.exports = app


