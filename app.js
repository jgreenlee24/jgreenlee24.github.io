const port = 3000
const express = require('express'),
  app = express();

app.use(express.static(__dirname + '/static'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get(/^(.+)$/, function (req, res) {
  res.sendfile('public/' + req.params[0]);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))