/*
localhost:8080 should take users to index.html
localhost:8080/about should take users to about.html
localhost:8080/contact-me should take users to contact-me.html
404.html should display any time the user tries to go to a page not listed above.
*/

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = (q.pathname === '/' ? './index' : '.' + q.pathname) + '.html';

    fs.readFile(filename, (err, data) => {
        if (err) {
            return fs.readFile('./404.html', (err, data) => {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    return res.end('404 Not Found');
                };
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);