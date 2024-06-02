const http = require('http');
const fs = require('fs');
const blocking = require('./modules/blocking');
const makeLogs = require('./modules/make_log');
const getQueryParams = require('./modules/getUrl');

const myServer = http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    makeLogs(req, res);
    // blocking(true);
  }
});

myServer.listen(800, () => console.log('Server started'));
