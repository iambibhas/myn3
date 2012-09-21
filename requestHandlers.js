require("jinjs").registerExtension(".tpl");

function render_template(response, template, params) {
    response.writeHead(200, {"Content-Type": "text/html"});

    var template = require("./templates/" + template);
    var result = template.render(params);

    response.end(result);
}

exports.home = function(request, response) {
    render_template(response, 'index', {
        message: 'Hello world'
    });
};

exports.room = function(request, response) {
    render_template(response, 'room', {
        message: 'This is a room'
    });
};
