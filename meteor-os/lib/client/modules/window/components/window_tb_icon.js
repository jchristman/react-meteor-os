'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_tb_icon_jsx-stylesheet-default'
}; // ----- External Imports ----- //


var WindowTitleBarIcon = function WindowTitleBarIcon(props) {
    return _react2.default.createElement('img', {
        className: stylesheet.default,
        src: '/favicon.ico'
    });
};

exports.default = WindowTitleBarIcon;