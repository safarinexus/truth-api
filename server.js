"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.listen(port, function () { "App started! Listening on Port ".concat(port); });
