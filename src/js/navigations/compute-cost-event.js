/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'usage' : data['usage']
        };
        var promise = context.actions['compute-action']({filters: packet});
        context.runningActionsByContainer['compute-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['compute-view-container'].splice(
                context.runningActionsByContainer['compute-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
