var http = require('http');
var EventEmitter = require('events').EventEmitter;
var url = require("url");

var host = '127.0.0.1';
var port = 1337

function start(route){
    http.createServer(route).listen(port, host);
    console.log('Server running at http://' + host + ':' + port + '/');
}

exports.start = start;