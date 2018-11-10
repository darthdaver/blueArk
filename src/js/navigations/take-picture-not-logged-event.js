/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['process-image-action']();
        context.runningActionsByContainer['log-in-external-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['log-in-external-view-container'].splice(
                context.runningActionsByContainer['log-in-external-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
