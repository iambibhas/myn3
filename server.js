var http = require('http');
var route = require("./requestHandlers").route;
var common = require('./common');

(function (route){
    http.createServer(route).listen(common.options.port, common.options.host);
    console.log('Server running at http://' + common.options.host + ':' + common.options.port + '/');
})(route);