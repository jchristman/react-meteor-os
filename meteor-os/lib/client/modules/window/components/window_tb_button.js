'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cancel_bubble = require('../lib/cancel_bubble.js');

var _cancel_bubble2 = _interopRequireDefault(_cancel_bubble);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- Library Imports ----- //


var stylesheet = {
    default: 'src_client_modules_window_components_window_tb_button_jsx-stylesheet-default'
};

// ----- Config Imports ----- //
// ----- External Imports ----- //


var WindowTitleBarButton = function WindowTitleBarButton(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.primary_colors, _themes2.default.Default.primary_colors_hover, props.focused && _themes2.default.Default.primary_colors_focus);

    return _react2.default.createElement(
        'div',
        {
            className: classes,
            onMouseDown: _cancel_bubble2.default,
            onClick: props.onClick
        },
        _react2.default.createElement(_reactFontawesome2.default, {
            name: props.faname,
            fixedWidth: true
        })
    );
};

exports.default = WindowTitleBarButton;