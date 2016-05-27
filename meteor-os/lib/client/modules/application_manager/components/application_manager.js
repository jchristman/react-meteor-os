'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _application = require('./application.js');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationManager = function ApplicationManager(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.ApplicationManager.applications.map(function (application, index) {
            return _react2.default.createElement(_application2.default, _extends({
                key: application._id,
                index: index,
                actions: props.actions // We are passing actions based on what type of wrapper is used. Dont use context.
            }, application));
        })
    );
};

exports.default = ApplicationManager;