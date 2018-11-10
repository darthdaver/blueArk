/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
            'name' : data['Name']
            ,'password' : data['Password']
            ,'surname' : data['Surname']
            ,'username' : data['Username']
            ,'email' : data['Email']
        };
        var promise = context.actions['registration-action']({filters: packet});
        context.runningActionsByContainer['sign-up-view-container'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['sign-up-view-container'].splice(
                context.runningActionsByContainer['sign-up-view-container'].indexOf(promise), 1
            );
            if (result.event) {
                context.navigations[result.event](context, result.data);
            }
        });
    };
};
