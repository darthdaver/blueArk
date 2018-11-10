/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['devices'] = require('./devices').createRepository(options);
    return repositories;
};
