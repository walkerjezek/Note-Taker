const express = require('express');

// Routes
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// express server
const app = express();

// Set the port to 3001 or whatever is available
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// Jay mentioned using API and HTML routes
app.use('/api', apiRoute);
app.use('/', htmlRoute);


// Listener from 11-01-24
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);