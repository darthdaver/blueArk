/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        if (!context.vms['log-in-external-view-container']) {
            context.top.active('log-in-external-view-container');
            context.vms['log-in-external-view-container'].init({mask: 'xor-log-in-view-container'});
        }
        if (!context.vms['welcome-to-user-view-container']) {
            context.vms['xor-log-in-view-container'].active('welcome-to-user-view-container');
        }
        context.vms['welcome-to-user-view-container'].init();
    };
};
