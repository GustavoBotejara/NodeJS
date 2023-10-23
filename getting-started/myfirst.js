// Node.js has a set of built-in modules that needs no installation
// To utilize then you only need to use the require() function as shown below:
var http = require('http');

// Creates a server 
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html' });
    res.end('Hello World!');
}).listen(8080);

// to run use 'node filename.js'
// ex: node myfirst.js 