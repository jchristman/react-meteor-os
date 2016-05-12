'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window_content_layout_leaf = require('../containers/window_content_layout_leaf.js');

var _window_content_layout_leaf2 = _interopRequireDefault(_window_content_layout_leaf);

var _window_content_layout_divider = require('./window_content_layout_divider.js');

var _window_content_layout_divider2 = _interopRequireDefault(_window_content_layout_divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_pane1_style = function get_pane1_style(orientation, percentage) {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 'calc(100% - ' + percentage + '% + 4px)',
            zIndex: 2
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 'calc(100% - ' + percentage + '% + 4px)',
            bottom: 0,
            zIndex: 2
        };
    }
};

var get_pane2_style = function get_pane2_style(orientation, percentage) {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 'calc(' + percentage + '% + 4px)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 'calc(' + percentage + '% + 4px)',
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    }
};

var WindowContentLayout = function WindowContentLayout(props) {
    var panes = props.panes || props.layout && props.layout.panes;
    var path = props.path || props.layout && 'layout';

    if (panes === undefined) {
        // Then we are a leaf!
        return _react2.default.createElement(_window_content_layout_leaf2.default, props);
    } else {
        var orientation = panes.orientation;
        var percentage = panes.percentage;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                {
                    style: get_pane1_style(orientation, percentage) },
                _react2.default.createElement(WindowContentLayout, _extends({}, panes.pane1, {
                    splitV: props.splitV,
                    splitH: props.splitH,
                    path: path + '.panes.pane1',
                    LocalState: props.LocalState }))
            ),
            _react2.default.createElement(_window_content_layout_divider2.default, {
                orientation: orientation,
                percentage: percentage }),
            _react2.default.createElement(
                'div',
                {
                    style: get_pane2_style(orientation, percentage) },
                _react2.default.createElement(WindowContentLayout, _extends({}, panes.pane2, {
                    splitV: props.splitV,
                    splitH: props.splitH,
                    path: path + '.panes.pane2',
                    LocalState: props.LocalState }))
            )
        );
    }
};

exports.default = WindowContentLayout;