var http = require('http');

// create a server object
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200 means that all is OK
    res.write('Hello World!'); // write a response to the client
    res.end(); // end the response
}).listen(8080); // the server object listens on port 8080