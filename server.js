var http = require('http');
var EventEmitter = require('events').EventEmitter;
var url = require("url");

var host = '127.0.0.1';
var port = 1337

function start(route, handle){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        // Ignoring Favicon. #PITA
        if(pathname == '/favicon.ico')
            return false;
        // Logging requests
        console.log(request['method'] + ' ' + request['headers']['host'] + ' ' + pathname);
        //Routing
        route(pathname, handle, response);
    }

    http.createServer(onRequest).listen(port, host);
    console.log('Server running at http://' + host + ':' + port + '/');
}

exports.start = start;