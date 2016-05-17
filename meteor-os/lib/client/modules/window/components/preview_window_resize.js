'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('./window.js');

var _window2 = _interopRequireDefault(_window);

var _get_resize_position = require('../lib/get_resize_position.js');

var _get_resize_position2 = _interopRequireDefault(_get_resize_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WindowResizePreview = function WindowResizePreview(props) {
    var x = props.x,
        y = props.y;
    if (x === undefined) x = props.position.left;
    if (y === undefined) y = props.position.top;
    var position = (0, _get_resize_position2.default)(props.which, x, y, props.position);
    var passOn = _.pick(props, ['_id', 'parent_id', 'LocalState', 'focused', 'title', 'zIndex', 'tabs', 'layout']);
    return _react2.default.createElement(_window2.default, _extends({}, passOn, {
        position: position,
        isPreview: true
    }));
};

exports.default = WindowResizePreview;