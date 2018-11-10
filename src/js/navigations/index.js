/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'take-picture-not-logged-event': require('./take-picture-not-logged-event').createNavigation(options)
        ,'log-in-sign-up-event': require('./log-in-sign-up-event').createNavigation(options)
        ,'registration-event': require('./registration-event').createNavigation(options)
        ,'registration-ok-event': require('./registration-ok-event').createNavigation(options)
        ,'registration-ko-event': require('./registration-ko-event').createNavigation(options)
        ,'welcome-log-out': require('./welcome-log-out').createNavigation(options)
        ,'log-in-ok': require('./log-in-ok').createNavigation(options)
        ,'log-in-ko': require('./log-in-ko').createNavigation(options)
        ,'sign-up-ev': require('./sign-up-ev').createNavigation(options)
        ,'log-in-ev': require('./log-in-ev').createNavigation(options)
        ,'fail-processing-event': require('./fail-processing-event').createNavigation(options)
        ,'done-processing-event': require('./done-processing-event').createNavigation(options)
        ,'compute-cost-event': require('./compute-cost-event').createNavigation(options)
        ,'computation-done-event': require('./computation-done-event').createNavigation(options)
        ,'computation-fail-event': require('./computation-fail-event').createNavigation(options)
        ,'your-devices-event': require('./your-devices-event').createNavigation(options)
        ,'save-device-event': require('./save-device-event').createNavigation(options)
        ,'saved-event': require('./saved-event').createNavigation(options)
        ,'home-your-devices-event': require('./home-your-devices-event').createNavigation(options)
        ,'back-logged-info-event': require('./back-logged-info-event').createNavigation(options)
        ,'redirect-to-home': require('./redirect-to-home').createNavigation(options)
        ,'back-not-logged-info-event': require('./back-not-logged-info-event').createNavigation(options)
        ,'back-logged-cost-event': require('./back-logged-cost-event').createNavigation(options)
        ,'back-not-logged-cost-event': require('./back-not-logged-cost-event').createNavigation(options)
        ,'selected-event': require('./selected-event').createNavigation(options)
    };
};
