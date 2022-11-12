//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/tempo-agora'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/tempo-agora/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
