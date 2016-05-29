'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ----- External Imports ----- //


// ----- Component Imports ----- //


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_tabbed_tabbar_tab = require('../containers/window_tabbed_tabbar_tab.js');

var _window_tabbed_tabbar_tab2 = _interopRequireDefault(_window_tabbed_tabbar_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowTabbedTab = function WindowTabbedTab(props) {
    var tabbar_classes = (0, _classnames2.default)(stylesheet.tabbar, props.isOver && stylesheet.tabbar_drop_isover);

    return props.connectDropTarget(_react2.default.createElement(
        'div',
        { className: tabbar_classes },
        props.content.map(function (tab, index) {
            return _react2.default.createElement(_window_tabbed_tabbar_tab2.default, _extends({
                key: index,
                index: index,
                layer_id: props.layer_id,
                changeChecked: props.changeChecked
            }, tab));
        })
    ));
};

var stylesheet = {
    tabbar: 'src_client_modules_window_components_window_tabbed_tabbar_jsx-stylesheet-tabbar',
    tabbar_drop_isover: 'src_client_modules_window_components_window_tabbed_tabbar_jsx-stylesheet-tabbar_drop_isover'
};

exports.default = WindowTabbedTab;