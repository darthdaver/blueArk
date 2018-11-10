/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['cost-view-container']) {
            context.top.active('cost-view-container');
            context.vms['cost-view-container'].init({mask: 'cost-details'});
        }
        data = data || {};
        var packet = {
            'id' : data['model']
        };
        context.vms['cost-details'].init({input: packet});
    };
};
