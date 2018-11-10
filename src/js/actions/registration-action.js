/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action() { // add "options" parameters if needed
    // TODO: Global Initialization
    /*
    example:
    this.collection = options.repositories.mail;
    */
}
Action.prototype.run = function (parameters, solve) { // add "onCancel" parameters if needed
    // Parameters:
    // parameters['email']
    // parameters['name']
    // parameters['password']
    // parameters['surname']
    // parameters['username']

    // TODO: Execution
    /*
    example:
    mail.find({subject: 'Re: ' + data.subject})
        .then(solve);
    */
    // THIS CAN BE REMOVED (BEGIN)
    Materialize.toast('Registration Action', 2000)
    solve({
        event: 'registration-ok-event', // Registration OK
        // event: 'registration-ko-event', // Registration KO
        data: {
            'email_err': '0',
            'email_old': '0',
            'name_err_msg': '0',
            'name_old': '0',
            'password_old': '0',
            'pwd_err_msg': '0',
            'surname_err_msg': '0',
            'surname_old': '0',
            'user_err_msg': '0',
            'username_old': '0',
        }
    });
    // THIS CAN BE REMOVED (END)
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
