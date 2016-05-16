'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDnd = require('react-dnd');

var _window_content_layout_leaf = require('../containers/window_content_layout_leaf.js');

var _window_content_layout_leaf2 = _interopRequireDefault(_window_content_layout_leaf);

var _window_content_layout_divider = require('../containers/window_content_layout_divider.js');

var _window_content_layout_divider2 = _interopRequireDefault(_window_content_layout_divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    WindowContentLayout: {
        displayName: 'WindowContentLayout'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/client/modules/window/components/window_content_layout.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/client/modules/window/components/window_content_layout.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}

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

var WindowContentLayout = _wrapComponent('WindowContentLayout')(function (_React$Component) {
    _inherits(WindowContentLayout, _React$Component);

    function WindowContentLayout() {
        _classCallCheck(this, WindowContentLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowContentLayout).apply(this, arguments));
    }

    _createClass(WindowContentLayout, [{
        key: 'getDOMNode',
        value: function getDOMNode() {
            return _reactDom2.default.findDOMNode(this);
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;

            var panes = props.panes || props.layout && props.layout.panes;
            var path = props.path || props.layout && 'layout';

            if (panes === undefined) {
                // Then we are a leaf!
                return _react3.default.createElement(_window_content_layout_leaf2.default, props);
            } else {
                var orientation = panes.orientation;
                var percentage = panes.percentage;

                return _react3.default.createElement(
                    'div',
                    { className: stylesheet.default },
                    _react3.default.createElement(
                        'div',
                        {
                            style: get_pane1_style(orientation, percentage) },
                        _react3.default.createElement(WindowContentLayout, _extends({}, panes.pane1, {
                            splitV: props.splitV,
                            splitH: props.splitH,
                            moveDivider: props.moveDivider,
                            path: path + '.panes.pane1',
                            dropTargetPath: path,
                            LocalState: props.LocalState }))
                    ),
                    _react3.default.createElement(_window_content_layout_divider2.default, {
                        orientation: orientation,
                        percentage: percentage,
                        getParentDOMNode: this.getDOMNode.bind(this),
                        path: path }),
                    _react3.default.createElement(
                        'div',
                        {
                            style: get_pane2_style(orientation, percentage) },
                        _react3.default.createElement(WindowContentLayout, _extends({}, panes.pane2, {
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
}(_react3.default.Component));

exports.default = WindowContentLayout;