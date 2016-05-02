'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var formatPath = function formatPath(path) {
    return 'applications.' + path;
};

var updateWindowPosition = function updateWindowPosition(context, path, top, left, width, height) {
    path = formatPath(path);
    Meteor.call('updateWindowPosition', path, top, left, width, height, function (err) {
        if (err) console.log(err);
    });
};

var updateWindowGrabFocus = function updateWindowGrabFocus(context, layerIndex, windowIndex) {
    var path = formatPath('' + layerIndex) + '.windows';
    Meteor.call('updateWindowGrabFocus', path, windowIndex, function (err) {
        if (err) console.log(err);
    });
};

exports.default = {
    updateWindowPosition: updateWindowPosition,
    updateWindowGrabFocus: updateWindowGrabFocus
};