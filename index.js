const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.listen(3000, () => {
  console.log('The server is started on http://localhost:3000');
})