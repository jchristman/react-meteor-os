'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_content = require('./window_content.js');

var _window_content2 = _interopRequireDefault(_window_content);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- External Imports ----- //


var stylesheet = {
    container: 'src_client_modules_window_components_window_plain_jsx-stylesheet-container'
};

var WindowPlain = function WindowPlain(props) {
    var classes = (0, _classnames2.default)(stylesheet.container, _themes2.default.Default.secondary_colors);
    return props.connectContextMenu(_react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(_window_content2.default, props)
    ));
};

exports.default = WindowPlain;