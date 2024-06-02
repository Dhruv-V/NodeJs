const fs = require('fs');
const url = require('url');
const getQueryParams = require('./getUrl');

const updateLogs = (req, res) => {
  console.log('New Req received');
  const log = `${Date.now()}: New Request to ${req.url}\n`;
  fs.appendFile('./log.txt', log, (err) => {
    if (err) console.log(err);
  });
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  switch (myUrl.pathname) {
    case '/about':
      getQueryParams(req, res);
      break;
    default:
      res.end('404 not found');
  }
  // res.end(req.url);
};

module.exports = updateLogs;
