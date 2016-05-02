'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactKomposer = require('react-komposer');

var _reactDnd = require('react-dnd');

var _meteor = require('meteor/meteor');

var _window_layer = require('../components/window_layer.js');

var _window_layer2 = _interopRequireDefault(_window_layer);

var _layer_hidden_state_var = require('../lib/layer_hidden_state_var.js');

var _layer_hidden_state_var2 = _interopRequireDefault(_layer_hidden_state_var);

var _window_resizing = require('../../window/lib/window_resizing.js');

var _window_resizing2 = _interopRequireDefault(_window_resizing);

var _update_window_position = require('../lib/update_window_position.js');

var _update_window_position2 = _interopRequireDefault(_update_window_position);

var _drag_types = require('../../window/configs/drag_types.js');

var dragTypes = _interopRequireWildcard(_drag_types);

var _get_resize_position = require('../../window/lib/get_resize_position.js');

var _get_resize_position2 = _interopRequireDefault(_get_resize_position);

var _snap_limits = require('../configs/snap_limits.js');

var snap_limits = _interopRequireWildcard(_snap_limits);

var _snap = require('../lib/snap.js');

var _snap2 = _interopRequireDefault(_snap);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Only allow things to be dropped in this layer that are of type: props._id
var layerType = function layerType(props) {
    return props._id;
};

var layerTarget = {
    drop: function drop(props, monitor) {
        var item = monitor.getItem();
        var delta = 0,
            left = 0,
            top = 0,
            width = 0,
            height = 0,
            x = 0,
            y = 0,
            position = {},
            pointer = {};
        switch (item.dragType) {
            case dragTypes.windowPositionType:
                pointer = monitor.getClientOffset();
                if (pointer.x <= snap_limits.limit || pointer.x >= window.innerWidth - snap_limits.limit) {
                    var tmp = _extends({ pointer: pointer }, props, { position: { width: 0, height: 0 } });
                    tmp = (0, _snap2.default)(tmp);
                    top = tmp.top;
                    left = tmp.left;
                    width = tmp.width;
                    height = tmp.height;
                } else {
                    delta = monitor.getDifferenceFromInitialOffset();
                    left = Math.round(item.position.left + delta.x) + 1;
                    top = Math.round(item.position.top + delta.y) + 1;
                    width = item.position.width;
                    height = item.position.height;
                }

                (0, _update_window_position2.default)(props, item, top, left, width, height);
                break;
            case dragTypes.windowResizerType:
                delta = monitor.getDifferenceFromInitialOffset();
                if (item.which.indexOf('n') !== -1) y = item.position.top + delta.y;
                if (item.which.indexOf('w') !== -1) x = item.position.left + delta.x;
                if (item.which.indexOf('s') !== -1) y = item.position.top + item.position.height + delta.y;
                if (item.which.indexOf('e') !== -1) x = item.position.left + item.position.width + delta.x;
                position = (0, _get_resize_position2.default)(item.which, x, y, item.position);

                (0, _update_window_position2.default)(props, item, position.top, position.left, position.width, position.height);
                break;
        }
    }
};

var collect = function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

var composer = function composer(context, onData) {
    var LocalState = context.LocalState;

    LocalState.setDefault((0, _layer_hidden_state_var2.default)(context._id, true));

    var layerHidden = LocalState.get((0, _layer_hidden_state_var2.default)(context._id));
    onData(null, { layerHidden: layerHidden });
};

exports.default = (0, _reactKomposer.composeAll)((0, _reactKomposer.composeWithTracker)(composer), (0, _reactDnd.DropTarget)(layerType, layerTarget, collect))(_window_layer2.default);