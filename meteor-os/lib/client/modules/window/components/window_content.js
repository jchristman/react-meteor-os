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

var _window_content_tabbed = require('../containers/window_content_tabbed.js');

var _window_content_tabbed2 = _interopRequireDefault(_window_content_tabbed);

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
    switch (props.type) {
        case windowTypes.tabbed:
            return _react2.default.createElement(_window_content_tabbed2.default, {
                LocalState: props.LocalState,
                grabFocus: props.grabFocus,
                window_id: props.window_id,
                layer_id: props.layer_id,
                content: props.content
            });
        default:
            return _react2.default.createElement(_window_content_plain2.default, {
                content: props.content
            });
    }
};

var WindowContent = function WindowContent(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.secondary_colors);
    var windowType = typeSwitch(props);
    return _react2.default.createElement(
        'div',
        { className: classes },
        windowType
    );
};

exports.default = WindowContent;