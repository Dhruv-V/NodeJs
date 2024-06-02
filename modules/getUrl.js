const url = require('url');

function getQueryParams(req, res) {
  const myInfo = url.parse(req.url, true).query;
  if (req?.url) console.log(url.parse(req.url, true));
  res.end(`Hello!!!My name is ${myInfo.name}.\nI am a ${myInfo.gender}`);
}

module.exports = getQueryParams;
