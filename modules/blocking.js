const fs = require('fs');

function blocking(blocking) {
  console.log('1');
  if (blocking) console.log(fs.readFileSync('./log.txt', 'utf-8'));
  else
    fs.readFile('./log.txt', 'utf-8', (error, result) => {
      if (error) console.log(err);
      else console.log(result);
    });
  console.log(3);
}

module.exports = blocking;
