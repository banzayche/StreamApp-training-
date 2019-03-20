const express = require('express');
const fs = require('fs');
const app = express();

app.get('/catsstream', (req, res) => {
  res.writeHead(200, {'Content-Type': 'video/mp4'});
  const str = fs.createReadStream('cats.mp4');
  str.pipe(res);
});

app.listen(3000, () => {
  console.log('The server was started on http://localhost:3000');
})