/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['sign-up-view-container']) {
            context.top.active('sign-up-view-container');
        }
        context.vms['sign-up-view-container'].init();
    };
};
