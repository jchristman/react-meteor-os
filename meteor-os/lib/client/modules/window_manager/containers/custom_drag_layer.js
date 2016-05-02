'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactDnd = require('react-dnd');

var _custom_drag_layer = require('../components/custom_drag_layer.js');

var _custom_drag_layer2 = _interopRequireDefault(_custom_drag_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collect = function collect(monitor) {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        currentPointer: monitor.getClientOffset(),
        isDragging: monitor.isDragging()
    };
};

exports.default = (0, _reactDnd.DragLayer)(collect)(_custom_drag_layer2.default);