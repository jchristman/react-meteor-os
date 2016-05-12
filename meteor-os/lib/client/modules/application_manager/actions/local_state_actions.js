'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _local_state_var = require('../configs/local_state_var.js');

var _local_state_var2 = _interopRequireDefault(_local_state_var);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get_node = function get_node(path, obj) {
    if (typeof path === 'string') path = path.split('.');
    return path.reduce(function (o, i) {
        return o[i];
    }, obj);
};

var set_node = function set_node(path, obj, val) {
    path = path.split('.');
    get_node(path.slice(0, -1), obj)[path.slice(-1)] = val;
};

var updateWindowPosition = function updateWindowPosition(context, path, top, left, width, height) {
    var LocalState = context.LocalState;

    var stateVar = LocalState.get(_local_state_var2.default);
    var current = LocalState.get(stateVar);

    set_node(path, current, { top: top, left: left, width: width, height: height });

    LocalState.set(stateVar, current);
};

var updateWindowGrabFocus = function updateWindowGrabFocus(context, layerIndex, windowIndex) {
    var LocalState = context.LocalState;

    var stateVar = LocalState.get(_local_state_var2.default);
    var current = LocalState.get(stateVar);

    var path = layerIndex + '.windows';
    var windows = get_node(path, current);
    var _window = windows.splice(windowIndex, 1)[0];
    windows.push(_window);

    var app = current.splice(layerIndex, 1)[0];
    current.push(app);

    LocalState.set(stateVar, current);
};

var updateWindowSplitPaneVertical = function updateWindowSplitPaneVertical(context, layerIndex, windowIndex, path) {
    return updateWindowSplitPane(context, layerIndex, windowIndex, path, 'vertical');
};
var updateWindowSplitPaneHorizontal = function updateWindowSplitPaneHorizontal(context, layerIndex, windowIndex, path) {
    return updateWindowSplitPane(context, layerIndex, windowIndex, path, 'horizontal');
};

var updateWindowSplitPane = function updateWindowSplitPane(context, layerIndex, windowIndex, path, orientation) {
    var LocalState = context.LocalState;

    var stateVar = LocalState.get(_local_state_var2.default);
    var current = LocalState.get(stateVar);

    if (path === undefined) path = 'layout';
    path = layerIndex + '.windows.' + windowIndex + '.' + path;

    console.log(path, current);
    var layoutNode = get_node(path, current);
    layoutNode.panes = {
        orientation: orientation,
        percentage: 50,
        pane1: {
            _id: Random.id()
        },
        pane2: {
            _id: Random.id()
        }
    };
    LocalState.set(stateVar, current);
};

exports.default = {
    updateWindowPosition: updateWindowPosition,
    updateWindowGrabFocus: updateWindowGrabFocus,
    updateWindowSplitPaneVertical: updateWindowSplitPaneVertical,
    updateWindowSplitPaneHorizontal: updateWindowSplitPaneHorizontal
};