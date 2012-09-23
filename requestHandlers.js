require("jinjs").registerExtension(".tpl");
var common = require('./common');
var router = require('router');
var route = router();

function raise404(response) {
    response.writeHead(404);
    response.end('Page not found');
}

function render_template(response, template, params) {
    response.writeHead(200, {"Content-Type": "text/html"});

    var template = require(common.options.template_path + template);
    var result = template.render(params);

    response.end(result);
}

route.get('/', function(request, response) {
    render_template(response, 'index', {
        message: 'Hello world'
    });
});

route.get('/room', function(request, response) {
    render_template(response, 'room', {
        message: 'This is a room'
    });
});

route.get(function(request, response) {
    // called if no other get route matched
    raise404(response);
});

exports.route = route;