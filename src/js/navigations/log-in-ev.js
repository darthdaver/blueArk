/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'password' : data['password']
            ,'username' : data['username']
        };
        var promise = context.actions['log-in-action']({filters: packet});
        context.runningActionsByContainer['log-in-form-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['log-in-form-view-container'].splice(
                context.runningActionsByContainer['log-in-form-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
