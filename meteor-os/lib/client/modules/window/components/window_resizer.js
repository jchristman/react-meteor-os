'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-default',
    nw: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-nw',
    n: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-n',
    ne: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-ne',
    e: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-e',
    se: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-se',
    s: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-s',
    sw: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-sw',
    w: 'src_client_modules_window_components_window_resizer_jsx-stylesheet-w'
};

var WindowResizer = function WindowResizer(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, stylesheet[props.which]);

    return props.connectDragSource(_react2.default.createElement('div', { className: classes }));
};

exports.default = WindowResizer;