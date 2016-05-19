'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactKomposer = require('react-komposer');

var _reactContextMenus = require('react-context-menus');

var _reactContextMenus2 = _interopRequireDefault(_reactContextMenus);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactDnd = require('react-dnd');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _window_content_layout_leaf = require('../components/window_content_layout_leaf.js');

var _window_content_layout_leaf2 = _interopRequireDefault(_window_content_layout_leaf);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
    label: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_reactFontawesome2.default, { name: 'arrows-v' }),
        '  Split Vertical'
    ),
    onClick: function onClick(event, props, index) {
        return props.splitV(props.path);
    }
}, {
    label: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_reactFontawesome2.default, { name: 'arrows-h' }),
        '  Split Horizontal'
    ),
    onClick: function onClick(event, props, index) {
        return props.splitH(props.path);
    }
}];

var type = function type() {
    return _drag_types.dividerType;
};

var spec = {
    drop: function drop(props, monitor, component) {
        var item = monitor.getItem();
        var pointer = monitor.getClientOffset();
        var parent = item.parent.getBoundingClientRect();

        var path = item.path !== undefined ? item.path : 'layout';
        var panes = item.panes !== undefined ? item.panes : item.layout.panes;

        if (props.path.indexOf(path) > -1) {
            var percentage = panes.orientation === 'horizontal' ? (pointer.x - parent.left) / (parent.right - parent.left) * 100 : (pointer.y - parent.top) / (parent.bottom - parent.top) * 100;

            props.moveDivider(path, percentage);
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

exports.default = (0, _reactKomposer.composeAll)((0, _reactContextMenus2.default)(items), (0, _reactDnd.DropTarget)(type, spec, collect))(_window_content_layout_leaf2.default);