/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['your-devices-view-container']) {
            context.top.active('your-devices-view-container');
            context.vms['your-devices-view-container'].init({mask: 'your-devices-selected-details'});
        }
        data = data || {};
        var packet = {
            'id' : data['id']
        };
        context.vms['your-devices-selected-details'].init({input: packet});
    };
};
