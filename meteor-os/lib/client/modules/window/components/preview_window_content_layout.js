'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window_content_layout = require('./window_content_layout.js');

var _window_content_layout2 = _interopRequireDefault(_window_content_layout);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = function style(props) {
    var rect = props.parent.getBoundingClientRect();
    return {
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
};

var LayoutPreview = function LayoutPreview(props) {
    var parent = props.parent.getBoundingClientRect();
    var pointer = props.pointer;


    if (pointer === null) return _react2.default.createElement('div', null);

    var panes = props.panes !== undefined ? props.panes : props.layout.panes;
    var percentage = panes.orientation === 'horizontal' ? (pointer.x - parent.left) / (parent.right - parent.left) * 100 : (pointer.y - parent.top) / (parent.bottom - parent.top) * 100;

    percentage = Math.max(Math.min(100, percentage), 0);

    var new_props = _.omit(props, ['panes']);
    if (props.panes === undefined) {
        new_props.layout.panes = _.extend({}, panes);
        new_props.layout.panes.percentage = percentage;
    } else {
        new_props.panes = _.extend({}, panes);
        new_props.panes.percentage = percentage;
    }

    return _react2.default.createElement(
        'div',
        {
            style: style(props),
            className: _themes2.default.Default.primary_colors },
        _react2.default.createElement(_window_content_layout2.default, new_props)
    );
};

exports.default = LayoutPreview;