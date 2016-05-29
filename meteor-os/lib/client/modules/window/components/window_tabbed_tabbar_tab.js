'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cancel_bubble = require('../lib/cancel_bubble.js');

var _cancel_bubble2 = _interopRequireDefault(_cancel_bubble);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----- Library Imports ----- //
// ----- External Imports ----- //


var WindowTabbedTabbarTab = function WindowTabbedTabbarTab(props) {
    var connectDragSource = props.connectDragSource;


    var tab_classes = (0, _classnames2.default)(stylesheet.tab, _themes2.default.Default.primary_colors, _themes2.default.Default.primary_colors_focus, props.checked && stylesheet.tab_checked);

    var label_classes = (0, _classnames2.default)(stylesheet.label, _themes2.default.Default.primary_colors_pseudo, !props.checked && _themes2.default.Default.primary_box_shadow_pseudo, !props.checked && _themes2.default.Default.primary_colors_hover, props.checked && stylesheet.label_checked);

    return connectDragSource(_react2.default.createElement(
        'div',
        {
            className: tab_classes },
        _react2.default.createElement(
            'div',
            {
                className: label_classes,
                onMouseDown: _cancel_bubble2.default,
                onClick: function onClick() {
                    return props.changeChecked(props.index);
                } },
            props.label
        )
    ));
};

// ----- Config Imports ----- //


var stylesheet = {
    tab: 'src_client_modules_window_components_window_tabbed_tabbar_tab_jsx-stylesheet-tab',
    tab_checked: 'src_client_modules_window_components_window_tabbed_tabbar_tab_jsx-stylesheet-tab_checked',
    label: 'src_client_modules_window_components_window_tabbed_tabbar_tab_jsx-stylesheet-label',
    label_checked: 'src_client_modules_window_components_window_tabbed_tabbar_tab_jsx-stylesheet-label_checked'
};

exports.default = WindowTabbedTabbarTab;