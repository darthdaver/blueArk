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
    // parameters['image']
    navigator.camera.getPicture(onSuccess, onFail, {destinationType: Camera.DestinationType.DATA_URL});

    function onSuccess(data) {

        $.ajax({
            url: 'http://192.168.8.104:4000/',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
              console.log(data);
                //Materialize.toast(data.model, 2000);
                solve({
                    event: 'done-processing-event', // done
                    // event: 'event-picture-fail', // fail
                    data: {
                        'model': data.model,
                    }
                });
            },
            data: JSON.stringify({
                img: data
            }),
            cache: false
        });

    }

    function onFail() {
        solve({
            event: 'fail-processing-event', // Fail
        });
    }
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
