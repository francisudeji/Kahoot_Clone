const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io');

// init app
const app = express();
// define port
const PORT = 4000 || process.env.PORT;

// get home route
app.get('/', (req, res) => {
  res.send('Hello from SERVER')
})

// listen on port
app.listen(PORT, err => {
  if(err) throw err;
  console.log(`Kahoot Clone - server  listening on http://localhost:${PORT}`);
})
