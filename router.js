function route(pathname, handle, response) {
    if (typeof handle[pathname] !== 'function') {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
    return handle[pathname](response);
}

exports.route = route;