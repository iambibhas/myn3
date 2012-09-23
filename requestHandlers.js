require("jinjs").registerExtension(".tpl");
var router = require('router');
var route = router();

function render_template(response, template, params) {
    response.writeHead(200, {"Content-Type": "text/html"});

    var template = require("./templates/" + template);
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

route.get(function(req, res) {
    // called if no other get route matched
    res.writeHead(404);
    res.end('Page not found');
});

exports.route = route;