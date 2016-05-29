'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactKomposer = require('react-komposer');

var _reactDnd = require('react-dnd');

var _window_tabbed = require('../components/window_tabbed.js');

var _window_tabbed2 = _interopRequireDefault(_window_tabbed);

var _get_window_tab_checked_key = require('../lib/get_window_tab_checked_key.js');

var _get_window_tab_checked_key2 = _interopRequireDefault(_get_window_tab_checked_key);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var layerType = function layerType(props) {
    return props.layer_id;
};

// We are creating 4 of these
var dropTargetSpecContentArea = function dropTargetSpecContentArea(area) {
    return {
        drop: function drop(props, monitor) {
            var item = monitor.getItem();
            console.log(item);
        }
    };
};

// We are creating 4 of these
var dropCollectContentArea = function dropCollectContentArea(area) {
    return function (connect, monitor) {
        var collect = {};
        collect['connectDropTargetContentArea' + area] = connect.dropTarget();
        collect['isOverContentArea' + area] = monitor.isOver();
        collect['canDropContentArea'] = monitor.canDrop(); // On purpose - we don't really care which one is "can drop". They are all the same

        return collect;
    };
};

var contentAreaDropTargets = Array.from(['Middle', 'Left', 'Right', 'Bottom'], function (area) {
    return (0, _reactDnd.DropTarget)(layerType, dropTargetSpecContentArea(area), dropCollectContentArea(area));
});

var dropTargetSpecTabbar = {
    drop: function drop(props, monitor) {
        var item = monitor.getItem();
        console.log(item);
    }
};

var dropCollectTabbar = function dropCollectTabbar(connect, monitor) {
    return {
        connectDropTargetTabbar: connect.dropTarget(),
        isOverTabbar: monitor.isOver(),
        cursorTabbar: monitor.getClientOffset(),
        canDropTabbar: monitor.canDrop()
    };
};

var composer = function composer(props, onData) {
    var LocalState = props.LocalState;


    LocalState.setDefault((0, _get_window_tab_checked_key2.default)(props), 0);

    _.each(props.content, function (tab) {
        tab.checked = false;
    });
    props.content[LocalState.get((0, _get_window_tab_checked_key2.default)(props))].checked = true;

    onData(null, { checked: LocalState.get((0, _get_window_tab_checked_key2.default)(props)) });
};

exports.default = _reactKomposer.composeAll.apply(undefined, _toConsumableArray(contentAreaDropTargets).concat([(0, _reactDnd.DropTarget)(layerType, dropTargetSpecTabbar, dropCollectTabbar), (0, _reactKomposer.composeWithTracker)(composer)]))(_window_tabbed2.default);