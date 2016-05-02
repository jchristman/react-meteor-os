'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactKomposer = require('react-komposer');

var _reactDnd = require('react-dnd');

var _window = require('../components/window.js');

var _window2 = _interopRequireDefault(_window);

var _drag_types = require('../configs/drag_types.js');

var _window_handles = require('../lib/window_handles.js');

var _window_handles2 = _interopRequireDefault(_window_handles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var layerType = function layerType(props) {
    return props.parent_id;
};

// This is a function that will return a DragSource specification based on a passed in handle
var dragSourceSpec = function dragSourceSpec(handle) {
    return {
        beginDrag: function beginDrag(props) {
            return _extends({}, props, { which: handle, dragType: handle === 'titlebar' ? _drag_types.windowPositionType : _drag_types.windowResizerType });
        }
    };
};

// This a function that will return a collect function based on a passed in handle
var collect = function collect(handle) {
    return function (connect, monitor) {
        var spec = {};

        spec[handle + 'connectDragSource'] = connect.dragSource();
        spec[handle + 'connectDragPreview'] = connect.dragPreview();
        spec[handle + 'isDragging'] = monitor.isDragging();

        return spec;
    };
};

var composer = function composer(props, onData) {
    onData(null, {});
};

// Now we need to wrap the window in 9 different drag sources.
// The first is the window title bar handle.
// The other 8 are the directional resizing handles.
var dragSourceContainers = Array.from(_window_handles2.default, function (handle) {
    return (0, _reactDnd.DragSource)(layerType, dragSourceSpec(handle), collect(handle));
});

exports.default = _reactKomposer.composeAll.apply(undefined, [(0, _reactKomposer.composeWithTracker)(composer)].concat(_toConsumableArray(dragSourceContainers)))(_window2.default);