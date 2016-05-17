'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('./window.js');

var _window2 = _interopRequireDefault(_window);

var _snap = require('../../window_manager/lib/snap.js');

var _snap2 = _interopRequireDefault(_snap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowPositionPreview = function WindowPositionPreview(props) {
    var passOn = _.omit(props, 'position');

    return _react2.default.createElement(_window2.default, _extends({}, passOn, {
        position: (0, _snap2.default)(props),
        isPreview: true
    }));
};

exports.default = WindowPositionPreview;