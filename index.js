const express = require('express');
const path = require('path');

const app = express();
const pathToClient = path.join(__dirname, 'client');

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(pathToClient, 'index.html'));
})

app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000');
});
