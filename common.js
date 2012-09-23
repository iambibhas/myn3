var mongoose = require('mongoose');
var options = {
    // required modules
    // util: require('util'),
    // fs: require('fs'),
    // ======================
    // global configurations
    db: mongoose.createConnection('mongodb://localhost/myn3db'),
    host: '127.0.0.1',
    port: 1337,
    template_path: "./templates/",
}

exports.options = options;