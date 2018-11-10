/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action(options) { // add "options" parameters if needed
    // TODO: Global Initialization
    /*
    example:
    this.collection = options.repositories.mail;
    */
    this.collection = options.repositories.devices;
}

Action.prototype.run = function (parameters, solve) { // add "onCancel" parameters if needed
    // Parameters:
    // parameters['usage']

    // TODO: Execution
    /*
    example:
    mail.find({subject: 'Re: ' + data.subject})
        .then(solve);
    */
    // THIS CAN BE REMOVED (BEGIN)

    function convertToCost(kwhYear,hours){
      var kwhDay = kwhYear/365;
      var kw = kwhDay/12;

      var chf = 0.23;

      return {
        costDay  : kw*hours*chf,
        costYear : kw*hours*365*chf
      }
    }

    this.collection.findById(localStorage.getItem('model')).then(function (item) {
      localStorage.setItem('cost-year', Math.round(convertToCost(parseInt(item['consumptions']), parseInt(parameters['usage'])).costYear));
    })

    localStorage.setItem('cost-day', 0);
    localStorage.setItem('cost-week', 0);
    localStorage.setItem('cost-year', 0);


    solve({
        event: 'computation-done-event', // Done
        // event: 'computation-fail-event', // Fail
        data: {
            'model': localStorage.getItem('model'),
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
