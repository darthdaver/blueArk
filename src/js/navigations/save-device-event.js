/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['save-action']();
        context.runningActionsByContainer['cost-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['cost-view-container'].splice(
                context.runningActionsByContainer['cost-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
