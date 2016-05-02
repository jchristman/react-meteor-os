'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_tb_title_jsx-stylesheet-default'
};

// ----- Config Imports ----- //
// ----- External Imports ----- //


var WindowTitleBarText = function WindowTitleBarText(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.primary_colors, _themes2.default.Default.primary_text_shadow, props.focused && _themes2.default.Default.primary_colors_focus, props.focused && _themes2.default.Default.primary_text_shadow_focus);

    return _react2.default.createElement(
        'div',
        { className: classes },
        props.title
    );
};

exports.default = WindowTitleBarText;