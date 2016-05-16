'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactDnd = require('react-dnd');

var _window_content_layout_divider = require('../components/window_content_layout_divider.js');

var _window_content_layout_divider2 = _interopRequireDefault(_window_content_layout_divider);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var type = function type() {
    return _drag_types.dividerType;
};

var spec = {
    beginDrag: function beginDrag(props) {
        return _extends({}, props);
    }
};

var collect = function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
};

exports.default = (0, _reactDnd.DragSource)(type, spec, collect)(_window_content_layout_divider2.default);