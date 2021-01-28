var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('poject_brvn.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(process.env.PORT);