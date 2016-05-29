'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactDnd = require('react-dnd');

var _window_tabbed_tabbar_tab = require('../components/window_tabbed_tabbar_tab.js');

var _window_tabbed_tabbar_tab2 = _interopRequireDefault(_window_tabbed_tabbar_tab);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layerType = function layerType(props) {
    return props.layer_id;
};

var dragSourceSpec = {
    beginDrag: function beginDrag(props) {
        return _extends({}, props, { dragType: _drag_types.tabMoveType });
    }
};

var dragCollect = function dragCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
};

exports.default = (0, _reactDnd.DragSource)(layerType, dragSourceSpec, dragCollect)(_window_tabbed_tabbar_tab2.default);