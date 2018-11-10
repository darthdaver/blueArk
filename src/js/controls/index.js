/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    require('./main-application').register();
    require('./c-sign-up-view-container').register();
    require('./c-sign-up-form').register();
    require('./c-log-in-external-view-container').register();
    require('./c-xor-log-in-view-container').register();
    require('./c-welcome-to-user-view-container').register();
    require('./c-log-in-form-view-container').register();
    require('./c-log-in-form').register();
    require('./c-compute-view-container').register();
    require('./c-compute-form').register();
    require('./c-cost-view-container').register();
    require('./c-cost-details').register();
    require('./c-household-appliance-info-details').register();
    require('./c-your-devices-view-container').register();
    require('./c-your-devices-selected-details').register();
    require('./c-your-devices-list').register();
                                                  };
