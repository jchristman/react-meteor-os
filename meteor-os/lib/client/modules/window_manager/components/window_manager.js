'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window_layer = require('../containers/window_layer.js');

var _window_layer2 = _interopRequireDefault(_window_layer);

var _custom_drag_layer = require('../containers/custom_drag_layer.js');

var _custom_drag_layer2 = _interopRequireDefault(_custom_drag_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowManager = function WindowManager(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_window_layer2.default, props),
        _react2.default.createElement(_custom_drag_layer2.default, props)
    );
};

exports.default = WindowManager;