/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout'),
    Promise = require('bluebird');

function ViewModel(params) {
    var self = this;
    self.context = params.context;
    self.status = ko.observable('');
    self.fields = ko.observable({});
    self.errors = ko.observable({});

    self.trigger = function (id) {
        self.context.navigations[id](self.context, self.output);
    };
}

ViewModel.prototype.id = 'sign-up-form';

ViewModel.prototype.waitForStatusChange = function () {
    return this._initializing ||
           Promise.resolve();
};

ViewModel.prototype._compute = function () {
    this.output = {
        'Email': this.input['Email'],
        'Name': this.input['Name'],
        'Password': this.input['Password'],
        'Surname': this.input['Surname'],
        'Username': this.input['Username'],
    }
    var self = this,
        fields = {
            'Email': ko.observable(this.input['Email']),
            'Name': ko.observable(this.input['Name']),
            'Password': ko.observable(this.input['Password']),
            'Surname': ko.observable(this.input['Surname']),
            'Username': ko.observable(this.input['Username']),
        },
        errors = {
            'Email': ko.observable(this.input['Email-error']),
            'Name': ko.observable(this.input['Name-error']),
            'Password': ko.observable(this.input['Password-error']),
            'Surname': ko.observable(this.input['Surname-error']),
            'Username': ko.observable(this.input['Username-error']),
        };
    fields['Email'].subscribe(function (value) {
        self.output['Email'] = value;
        self.errors()['Email'](undefined);
    });
    fields['Name'].subscribe(function (value) {
        self.output['Name'] = value;
        self.errors()['Name'](undefined);
    });
    fields['Password'].subscribe(function (value) {
        self.output['Password'] = value;
        self.errors()['Password'](undefined);
    });
    fields['Surname'].subscribe(function (value) {
        self.output['Surname'] = value;
        self.errors()['Surname'](undefined);
    });
    fields['Username'].subscribe(function (value) {
        self.output['Username'] = value;
        self.errors()['Username'](undefined);
    });
    this.fields(fields);
    this.errors(errors);
    this.status('computed');
};


ViewModel.prototype.init = function (options) {
    options = options || {};
    this.output = undefined;
    this.fields({});
    this.errors({});
    this.input = options.input || {};
    this.status('ready');
    var self = this;
    this._initializing = new Promise(function (resolve) {
        setTimeout(function () {
            self._compute();
            resolve();
            self._initializing = undefined;
        }, 1);
    });
};

exports.register = function () {
    ko.components.register('c-sign-up-form', {
        viewModel: {
            createViewModel: function (params, componentInfo) {
                var vm = new ViewModel(params);
                params.context.vms[vm.id] = vm;
                ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () { delete params.context.vms[vm.id]; });
                return vm;
            }
        },
        template: require('./index.html'),
        synchronous: true
    });
};
