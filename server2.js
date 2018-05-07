// http://0.0.0.0:3001/echo?message=Hello -> Hello

var http = require('http');
var url  = require('url');

var server = new http.Server(function (req, res) {
  
  console.log(req.headers);

  //console.log( req.method, req.url );
  
  var urlParsed = url.parse(req.url, true);
  //console.log(urlParsed);

  if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate'); // removeHeader
    res.end( urlParsed.query.message );
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3001, '0.0.0.0');
