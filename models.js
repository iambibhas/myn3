var common = require('./common');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/*
Note:
1. Users can register username.
(I'd be damn pissed if I have to use different nicks everytime in a room, 
just because someone else is using it.)
2. Password and Email verification is needed only when registering.
*/
var User = new Schema({
    nick: {
        type:String,
        required: true,
        unique: true
    },
    email: String,
    passwd: String,
    verified: Boolean
});

var Room = new Schema({
    name: {
        type:String,
        required: true
    },
    slug: {
        type:String,
        required: true,
        unique: true
    },
    tagline: String,
});