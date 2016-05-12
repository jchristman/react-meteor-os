'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMenus = require('react-menus');

var _reactMenus2 = _interopRequireDefault(_reactMenus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
    label: 'test',
    onClick: function onClick(props, index, event) {
        console.log('props', props, 'index', index, 'event', event);
    }
}, {
    label: 'test2',
    onClick: function onClick(props, index, event) {
        console.log(props, index, event);
    }
}];

var WindowContextMenu = function WindowContextMenu(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactMenus2.default, { items: items })
    );
};

exports.default = WindowContextMenu;