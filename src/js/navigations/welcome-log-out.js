/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['log-out-action']();
        context.runningActionsByContainer['welcome-to-user-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['welcome-to-user-view-container'].splice(
                context.runningActionsByContainer['welcome-to-user-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
