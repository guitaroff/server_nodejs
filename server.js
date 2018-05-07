var http = require('http');

var server = new http.Server();

server.listen(3001, '0.0.0.0');

var counter = 0;

var emit = server.emit;
server.emit = function(event) {
  console.log(event);
  emit.apply(server, arguments);
};

server.on('request', function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
});
  res.end('Привет, мир!' + ++counter);
});
