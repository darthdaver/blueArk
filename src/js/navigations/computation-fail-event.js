/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['compute-view-container']) {
            context.top.active('compute-view-container');
        }
        context.vms['compute-view-container'].init();
    };
};
