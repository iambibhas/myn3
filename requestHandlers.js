var ejs = require('ejs');
var fs = require('fs');

function render_template(response, template, params) {
    response.writeHead(200, {"Content-Type": "text/html"});

    var data = fs.readFileSync(template, 'utf8')
    var ret = ejs.render(data, params);
    
    response.end(ret);
}

function home(response) {
    render_template(response, 'views/index.ejs', {
        message: 'Hello world'
    });
    
}

function room(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello Room");
    response.end();
}

exports.home = home;
exports.room = room;