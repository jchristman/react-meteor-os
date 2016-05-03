'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _check = require('meteor/check');

exports.default = function (context) {
    var ApplicationManager = context.Collections.ApplicationManager;

    Meteor.methods({
        updateWindowPosition: function updateWindowPosition(path, top, left, width, height) {
            (0, _check.check)(path, String);
            (0, _check.check)(top, _check.Match.Integer);
            (0, _check.check)(left, _check.Match.Integer);
            (0, _check.check)(width, _check.Match.Integer);
            (0, _check.check)(height, _check.Match.Integer);

            var current = ApplicationManager.findOne({ userId: 'asdf' }); // Replace with this.userId
            if (current) {
                var update = {};
                update[path + '.top'] = top;
                update[path + '.left'] = left;
                update[path + '.width'] = width;
                update[path + '.height'] = height;
                return ApplicationManager.update({ userId: current.userId }, { '$set': update });
            } else {
                throw new Meteor.Error('User not found!');
            }
        }
    });
};