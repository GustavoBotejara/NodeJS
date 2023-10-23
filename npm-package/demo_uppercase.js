import { createServer } from 'http';
import { upperCase } from "upper-case";

createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(upperCase("hello world!"));
    res.end();
}).listen(8080);

// put "type": "module", in the package.json to use this code