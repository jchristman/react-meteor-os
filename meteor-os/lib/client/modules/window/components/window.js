'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_tb = require('./window_tb.js');

var _window_tb2 = _interopRequireDefault(_window_tb);

var _window_resizer = require('./window_resizer.js');

var _window_resizer2 = _interopRequireDefault(_window_resizer);

var _window_layout = require('./window_layout.js');

var _window_layout2 = _interopRequireDefault(_window_layout);

var _window_layout_leaf = require('../containers/window_layout_leaf.js');

var _window_layout_leaf2 = _interopRequireDefault(_window_layout_leaf);

var _window_handles = require('../lib/window_handles.js');

var _window_handles2 = _interopRequireDefault(_window_handles);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ----- External Imports ----- //


// ----- Component Imports ----- //


// ----- Library Imports ----- //


// ----- Config Imports ----- //


var stylesheet = {
    default: 'src_client_modules_window_components_window_jsx-stylesheet-default',
    layout: 'src_client_modules_window_components_window_jsx-stylesheet-layout'
};

var style = function style(props) {
    return {
        top: props.position.top,
        left: props.position.left,
        width: props.position.width,
        height: props.position.height,
        zIndex: props.zIndex,
        pointerEvents: props.isPreview ? 'none' : 'auto'
    };
};

var windowContent = function windowContent(props) {
    switch (props.type) {
        default:
            return _react2.default.createElement(WindowContentPaned, { content: props.content });
    }
};

var Window = function (_React$Component) {
    _inherits(Window, _React$Component);

    function Window() {
        _classCallCheck(this, Window);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Window).apply(this, arguments));
    }

    _createClass(Window, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.isPreview !== true) {
                _.each(_window_handles2.default, function (handle) {
                    var connectDragPreview = _this2.props[handle + 'connectDragPreview'];
                    connectDragPreview && connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {});
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.props.isPreview !== true) {
                if (_.reduce(_window_handles2.default, function (memo, handle) {
                    var isDragging = _this3.props[handle + 'isDragging'];
                    if (isDragging === undefined) return memo || false;
                    return memo || isDragging;
                }, false)) {
                    this.props.unhideLayer();
                    return null;
                }
            }

            var window_classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.primary_colors, this.props.classes);
            var layout_classes = (0, _classnames2.default)(stylesheet.layout, _themes2.default.Default.primary_colors);

            return _react2.default.createElement(
                'div',
                {
                    className: window_classes,
                    style: style(this.props),
                    onMouseOver: this.props.unhideLayer,
                    onMouseOut: this.props.hideLayer,
                    onMouseDown: this.grabFocus.bind(this)
                },
                _react2.default.createElement(_window_tb2.default, {
                    actions: this.props.actions,
                    connectDragSource: this.props.titlebarconnectDragSource,
                    title: this.props.title,
                    focused: this.props.focused,
                    path: this.props.path
                }),
                _react2.default.createElement(
                    'div',
                    { className: layout_classes },
                    this.props.layout.panes === undefined ? _react2.default.createElement(_window_layout_leaf2.default, _extends({
                        actions: this.props.actions
                    }, this.props.layout, {
                        path: this.props.path + '.layout' })) : _react2.default.createElement(_window_layout2.default, _extends({
                        actions: this.props.actions
                    }, this.props.layout, {
                        path: this.props.path + '.layout' }))
                ),
                this.props.isPreview !== true ? _window_handles2.default.slice(1).map(function (handle, index) {
                    return _react2.default.createElement(_window_resizer2.default, {
                        key: index,
                        which: handle,
                        connectDragSource: _this3.props[handle + 'connectDragSource']
                    });
                }) : null
            );
        }
    }, {
        key: 'grabFocus',
        value: function grabFocus() {
            if (!this.props.focused) this.props.grabFocus(this.props.index);
        }
    }, {
        key: 'minimizeWindow',
        value: function minimizeWindow(event) {
            console.log('Minimize window');
        }
    }, {
        key: 'maximizeWindow',
        value: function maximizeWindow(event) {
            console.log('Maximize window');
        }
    }, {
        key: 'restoreWindow',
        value: function restoreWindow(event) {
            console.log('Restore window');
        }
    }, {
        key: 'closeWindow',
        value: function closeWindow(event) {
            console.log('Close window');
        }
    }]);

    return Window;
}(_react2.default.Component);

exports.default = Window;