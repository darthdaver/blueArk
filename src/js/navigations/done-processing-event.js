/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['compute-view-container']) {
            context.top.active('compute-view-container');
            context.vms['compute-view-container'].init({mask: 'household-appliance-info-details'});
        }
        data = data || {};
        var packet = {
            'id' : data['model']
        };
        context.vms['household-appliance-info-details'].init({input: packet});
    };
};
