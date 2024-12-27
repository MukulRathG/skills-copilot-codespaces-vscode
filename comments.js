// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create server
http.createServer(function(req, res) {
    // Get the path name of the URL
    var pathname = url.parse(req.url).pathname;
    // Print the path name
    console.log("Request for " + pathname + " received.");
    // Read the file from the file system
    fs.readFile(pathname.substr(1), function(err, data) {
        // If there is an error
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});
            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8081);

// Print the message
console.log('Server running at http://