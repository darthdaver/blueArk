/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'registration-action': require('./registration-action').createAction(options)
        ,'log-in-action': require('./log-in-action').createAction(options)
        ,'process-image-action': require('./process-image-action').createAction(options)
        ,'compute-action': require('./compute-action').createAction(options)
        ,'save-action': require('./save-action').createAction(options)
        ,'log-out-action': require('./log-out-action').createAction(options)
    };
};
