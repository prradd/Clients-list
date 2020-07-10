"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(7000, function () {
    console.log('App is listening on port 7000');
});
