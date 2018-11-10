/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['your-devices-view-container']) {
            context.top.active('your-devices-view-container');
        }
        context.vms['your-devices-view-container'].init();
    };
};
