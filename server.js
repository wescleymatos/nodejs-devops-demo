// https://github.com/expressjs/express
const express = require('express');
// https://github.com/motdotla/dotenv
const dotenv = require('dotenv').config({
    silent: true
});
// https://github.com/jinder/path
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();
app.listen(port, host, () => {
    console.log(`Nodejs DevOps Demo is up and running at ${host}:${port}`);
});