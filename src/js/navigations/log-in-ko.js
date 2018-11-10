/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['log-in-external-view-container']) {
            context.top.active('log-in-external-view-container');
            context.vms['log-in-external-view-container'].init({mask: 'xor-log-in-view-container'});
        }
        if (!context.vms['log-in-form-view-container']) {
            context.vms['xor-log-in-view-container'].active('log-in-form-view-container');
            context.vms['log-in-form-view-container'].init({mask: 'log-in-form'});
        }
        data = data || {};
        var packet = {
            'username' : data['username_old']
            ,'username-error' : data['username_err_msg']
            ,'password' : data['password_old']
            ,'password-error' : data['password_err_msg']
        };
        context.vms['log-in-form'].init({input: packet});
    };
};
