var static = require('node-static');

//
// Create a node-static server instance to serve the current folder
//
var file = new(static.Server)(__dirname);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(8080);
