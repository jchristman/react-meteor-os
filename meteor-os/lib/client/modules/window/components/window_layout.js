'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _window_layout_divider = require('./window_layout_divider.js');

var _window_layout_divider2 = _interopRequireDefault(_window_layout_divider);

var _window_layout_leaf = require('../containers/window_layout_leaf.js');

var _window_layout_leaf2 = _interopRequireDefault(_window_layout_leaf);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_layout_jsx-stylesheet-default'
};

var get_pane1_style = function get_pane1_style(orientation, percentage) {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 'calc(100% - ' + percentage + '% + 4px)',
            zIndex: 2
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 'calc(100% - ' + percentage + '% + 4px)',
            bottom: 0,
            zIndex: 2
        };
    }
};

var get_pane2_style = function get_pane2_style(orientation, percentage) {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 'calc(' + percentage + '% + 4px)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 'calc(' + percentage + '% + 4px)',
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    }
};

var WindowLayout = function (_React$Component) {
    _inherits(WindowLayout, _React$Component);

    function WindowLayout() {
        _classCallCheck(this, WindowLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowLayout).apply(this, arguments));
    }

    _createClass(WindowLayout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.connectDragPreview && this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {});
        }
    }, {
        key: 'renderLeafOrLayout',
        value: function renderLeafOrLayout(pane, actions, path) {
            if (pane.panes === undefined) {
                return _react2.default.createElement(_window_layout_leaf2.default, _extends({
                    actions: actions
                }, pane, {
                    path: path }));
            } else {
                return _react2.default.createElement(WindowLayoutWrapper, _extends({
                    actions: actions
                }, pane, {
                    path: path }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var panes = props.panes;
            var actions = props.actions;
            var path = props.path;
            var orientation = panes.orientation;
            var percentage = panes.percentage;


            return _react2.default.createElement(
                'div',
                { className: stylesheet.default },
                _react2.default.createElement(
                    'div',
                    { style: get_pane1_style(orientation, percentage) },
                    this.renderLeafOrLayout(panes.pane1, actions, path + '.panes.pane1')
                ),
                _react2.default.createElement(_window_layout_divider2.default, {
                    orientation: orientation,
                    percentage: percentage,
                    connectDragSource: props.connectDragSource,
                    path: props.path }),
                _react2.default.createElement(
                    'div',
                    { style: get_pane2_style(orientation, percentage) },
                    this.renderLeafOrLayout(panes.pane2, actions, path + '.panes.pane2')
                )
            );
        }
    }]);

    return WindowLayout;
}(_react2.default.Component);

var type = function type() {
    return _drag_types.dividerType;
};

var spec = {
    beginDrag: function beginDrag(props, monitor, component) {
        return _extends({}, props, { parent: _reactDom2.default.findDOMNode(component), dragType: _drag_types.dividerType });
    }
};

var collect = function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
};

var WindowLayoutWrapper = (0, _reactDnd.DragSource)(type, spec, collect)(WindowLayout);
exports.default = WindowLayoutWrapper;