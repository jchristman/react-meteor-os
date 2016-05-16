'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_content_layout_divider_jsx-stylesheet-default'
};

var get_divider_position = function get_divider_position(props) {
    if (props.orientation === 'vertical') {
        return {
            top: 'calc(' + props.percentage + '% - 2px)',
            left: 5,
            right: 5,
            height: 4,
            cursor: 'ns-resize',
            zIndex: 1
        };
    } else {
        return {
            top: 5,
            left: 'calc(' + props.percentage + '% - 2px)',
            bottom: 5,
            width: 4,
            cursor: 'ew-resize',
            zIndex: 1
        };
    }
};

var WindowContentLayoutDivider = function WindowContentLayoutDivider(props) {
    return props.connectDragSource(_react2.default.createElement('div', {
        className: stylesheet.default,
        style: get_divider_position(props)
    }));
};

exports.default = WindowContentLayoutDivider;