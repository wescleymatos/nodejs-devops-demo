// https://github.com/expressjs/express
const express = require('express');
// https://github.com/motdotla/dotenv
const dotenv = require('dotenv').config({
    silent: true
});
// https://github.com/jinder/path
const path = require('path');

// Variables for Node.js server
const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Redirect root route to public folder
app.use(express.static(path.join(__dirname, 'public')))

// Start Node.js and Expressjs server
app.listen(port, host, () => {
    console.log(`Nodejs DevOps Demo is up and running at ${host}:${port}`);
});

module.exports = app;
