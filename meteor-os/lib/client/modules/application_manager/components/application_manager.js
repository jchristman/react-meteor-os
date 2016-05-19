'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _application2 = require('./application.js');

var _application3 = _interopRequireDefault(_application2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationManager = function ApplicationManager(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.ApplicationManager.applications.map(function (_application, index) {
            return _react2.default.createElement(_application3.default, _extends({
                key: _application._id,
                index: index,
                actions: props.actions
            }, { LocalState: props.LocalState }, _application));
        })
    );
};

exports.default = ApplicationManager;