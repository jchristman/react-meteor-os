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

var _window_content_layout_divider = require('./window_content_layout_divider.js');

var _window_content_layout_divider2 = _interopRequireDefault(_window_content_layout_divider);

var _window_content_layout_leaf = require('../containers/window_content_layout_leaf.js');

var _window_content_layout_leaf2 = _interopRequireDefault(_window_content_layout_leaf);

var _drag_types = require('../configs/drag_types.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_content_layout_jsx-stylesheet-default'
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

var WindowContentLayout = function (_React$Component) {
    _inherits(WindowContentLayout, _React$Component);

    function WindowContentLayout() {
        _classCallCheck(this, WindowContentLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowContentLayout).apply(this, arguments));
    }

    _createClass(WindowContentLayout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.connectDragPreview && this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {});
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;


            var panes = props.panes || props.layout && props.layout.panes;
            var path = props.path || props.layout && 'layout';

            if (panes === undefined) {
                // Then we are a leaf!
                return _react2.default.createElement(_window_content_layout_leaf2.default, props);
            } else {
                var orientation = panes.orientation;
                var percentage = panes.percentage;

                return _react2.default.createElement(
                    'div',
                    { className: stylesheet.default },
                    _react2.default.createElement(
                        'div',
                        {
                            style: get_pane1_style(orientation, percentage) },
                        _react2.default.createElement(WindowContentLayoutWrapper, _extends({}, panes.pane1, {
                            splitV: props.splitV,
                            splitH: props.splitH,
                            moveDivider: props.moveDivider,
                            path: path + '.panes.pane1',
                            LocalState: props.LocalState }))
                    ),
                    _react2.default.createElement(_window_content_layout_divider2.default, {
                        orientation: orientation,
                        percentage: percentage,
                        connectDragSource: this.props.connectDragSource,
                        path: path }),
                    _react2.default.createElement(
                        'div',
                        {
                            style: get_pane2_style(orientation, percentage) },
                        _react2.default.createElement(WindowContentLayoutWrapper, _extends({}, panes.pane2, {
                            splitV: props.splitV,
                            splitH: props.splitH,
                            moveDivider: props.moveDivider,
                            path: path + '.panes.pane2',
                            LocalState: props.LocalState }))
                    )
                );
            }
        }
    }]);

    return WindowContentLayout;
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

var WindowContentLayoutWrapper = (0, _reactDnd.DragSource)(type, spec, collect)(WindowContentLayout);
exports.default = WindowContentLayoutWrapper;