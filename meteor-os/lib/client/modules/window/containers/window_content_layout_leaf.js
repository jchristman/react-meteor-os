'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context_menu = require('../../context_menu/context_menu.js');

var _context_menu2 = _interopRequireDefault(_context_menu);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _window_content_layout_leaf = require('../components/window_content_layout_leaf.js');

var _window_content_layout_leaf2 = _interopRequireDefault(_window_content_layout_leaf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
    label: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_reactFontawesome2.default, { name: 'arrows-v' }),
        '  Split Vertical'
    ),
    onClick: function onClick(event, props, index) {
        props.splitV(props.path);
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

exports.default = (0, _context_menu2.default)(items)(_window_content_layout_leaf2.default);