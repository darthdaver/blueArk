/*jslint node: true, nomen: true */
"use strict";

exports.createNavigation = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['sign-up-view-container']) {
            context.top.active('sign-up-view-container');
            context.vms['sign-up-view-container'].init({mask: 'sign-up-form'});
        }
        data = data || {};
        var packet = {
            'Name' : data['name_old']
            ,'Name-error' : data['name_err_msg']
            ,'Password' : data['password_old']
            ,'Password-error' : data['pwd_err_msg']
            ,'Surname' : data['surname_old']
            ,'Surname-error' : data['surname_err_msg']
            ,'Username' : data['username_old']
            ,'Username-error' : data['user_err_msg']
            ,'Email' : data['email_old']
        };
        context.vms['sign-up-form'].init({input: packet});
    };
};
