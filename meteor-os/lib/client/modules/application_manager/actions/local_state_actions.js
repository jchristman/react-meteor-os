'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baconipsum = require('baconipsum');

var _baconipsum2 = _interopRequireDefault(_baconipsum);

var _local_state_var = require('../configs/local_state_var.js');

var _local_state_var2 = _interopRequireDefault(_local_state_var);

var _constants = require('../../../configs/constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

    var layoutNode = get_node(path, current);
    var _content = layoutNode.content;
    var _content_type = layoutNode.content_type;
    var _leaf_type = layoutNode.leaf_type;
    delete layoutNode.content;
    delete layoutNode.content_type;
    delete layoutNode.leaf_type;

    layoutNode.panes = {
        orientation: orientation,
        percentage: 50,
        pane1: {
            _id: Random.id(),
            content: _content,
            content_type: _content_type,
            leaf_type: _leaf_type
        },
        pane2: {
            _id: Random.id(),
            content: (0, _baconipsum2.default)(100),
            content_type: Constants.ContentTypes.Text,
            leaf_type: Constants.LeafTypes.Plain
        }
    };
    LocalState.set(stateVar, current);
};

var updateWindowMoveDivider = function updateWindowMoveDivider(context, layerIndex, windowIndex, path, percentage) {
    var LocalState = context.LocalState;

    var stateVar = LocalState.get(_local_state_var2.default);
    var current = LocalState.get(stateVar);

    if (path === undefined) path = 'layout';
    path = layerIndex + '.windows.' + windowIndex + '.' + path;

    var layoutNode = get_node(path, current);
    layoutNode.panes.percentage = percentage;

    LocalState.set(stateVar, current);
};

exports.default = {
    updateWindowPosition: updateWindowPosition,
    updateWindowGrabFocus: updateWindowGrabFocus,
    updateWindowSplitPaneVertical: updateWindowSplitPaneVertical,
    updateWindowSplitPaneHorizontal: updateWindowSplitPaneHorizontal,
    updateWindowMoveDivider: updateWindowMoveDivider
};