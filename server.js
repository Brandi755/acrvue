const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
var history = require('connect-history-api-fallback');

const app = express();

app.use(history());

app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;

app.listen(port);

console.log('v2 VueJs app build Listening on port: '+  port + ' ' + 'http://localhost:' + port + ' OR https://api-acr.herokuapp.com/');