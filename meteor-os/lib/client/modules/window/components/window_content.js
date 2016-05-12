'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_content_plain = require('./window_content_plain.js');

var _window_content_plain2 = _interopRequireDefault(_window_content_plain);

var _window_content_layout = require('./window_content_layout.js');

var _window_content_layout2 = _interopRequireDefault(_window_content_layout);

var _windowTypes = require('/lib/windowTypes.js');

var windowTypes = _interopRequireWildcard(_windowTypes);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- Library Imports ----- //


// ----- Component Imports ----- //
// ----- External Imports ----- //


var stylesheet = {
    default: 'src_client_modules_window_components_window_content_jsx-stylesheet-default'
};

// ----- Config Imports ----- //


var typeSwitch = function typeSwitch(props) {
    if (props.tabs !== undefined && props.layout !== undefined) {
        return _react2.default.createElement(_window_content_layout2.default, {
            LocalState: props.LocalState,
            grabFocus: props.grabFocus,
            splitV: props.splitV,
            splitH: props.splitH,
            window_id: props.window_id,
            layer_id: props.layer_id,
            layout: props.layout
        });
    } else {
        return _react2.default.createElement(_window_content_plain2.default, {
            content: props.content
        });
    }
};

var WindowContent = function WindowContent(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.primary_colors);
    var windowType = typeSwitch(props);
    return _react2.default.createElement(
        'div',
        { className: classes },
        windowType
    );
};

exports.default = WindowContent;