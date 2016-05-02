'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window_tb_button = require('./window_tb_button.js');

var _window_tb_button2 = _interopRequireDefault(_window_tb_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- External Imports ----- //


var stylesheet = {
    default: 'src_client_modules_window_components_window_tb_buttons_jsx-stylesheet-default'
};

// ----- Component Imports ----- //


var getButtons = function getButtons(props) {
    return [{
        name: 'Close',
        faname: 'remove',
        onClick: props.closeWindow
    }, {
        name: 'Restore',
        faname: 'share',
        onClick: props.restoreWindow
    }, {
        name: 'Maximize',
        faname: 'chevron-up',
        onClick: props.maximizeWindow
    }, {
        name: 'Minimize',
        faname: 'chevron-down',
        onClick: props.minimizeWindow
    }];
};

var WindowTitleBarButtons = function WindowTitleBarButtons(props) {
    var buttons = getButtons(props);
    return _react2.default.createElement(
        'div',
        { className: stylesheet.default },
        buttons.map(function (button, index) {
            return _react2.default.createElement(_window_tb_button2.default, {
                key: index,
                faname: button.faname,
                focused: props.focused,
                onClick: button.onClick
            });
        })
    );
};

exports.default = WindowTitleBarButtons;