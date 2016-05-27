'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_tb_icon = require('./window_tb_icon.js');

var _window_tb_icon2 = _interopRequireDefault(_window_tb_icon);

var _window_tb_title = require('./window_tb_title.js');

var _window_tb_title2 = _interopRequireDefault(_window_tb_title);

var _window_tb_buttons = require('./window_tb_buttons.js');

var _window_tb_buttons2 = _interopRequireDefault(_window_tb_buttons);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- Component Imports ----- //
// ----- External Imports ----- //


var stylesheet = {
    default: 'src_client_modules_window_components_window_tb_jsx-stylesheet-default'
};

// ----- Config Imports ----- //


var renderTitleBar = function renderTitleBar(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.primary_colors);
    return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(_window_tb_icon2.default, null),
        _react2.default.createElement(_window_tb_title2.default, {
            title: props.title,
            focused: props.focused }),
        _react2.default.createElement(_window_tb_buttons2.default, {
            actions: props.actions,
            focused: props.focused })
    );
};

var WindowTitleBar = function WindowTitleBar(props) {
    return props.connectDragSource !== undefined ? props.connectDragSource(renderTitleBar(props)) : renderTitleBar(props);
};

exports.default = WindowTitleBar;