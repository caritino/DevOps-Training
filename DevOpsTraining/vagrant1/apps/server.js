var http = require('http');
// Configure our HTTP server to respond with Hello World to all requests.

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("<h1>Hello Atlanta DevOps!</h1>");
});

// Listen on port 8666, IP defaults to 127.0.0.1
server.listen(8686);
