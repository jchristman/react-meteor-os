'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window2 = require('../../window/containers/window.js');

var _window3 = _interopRequireDefault(_window2);

var _window_layer = require('../configs/window_layer.js');

var _layer_hidden_state_var = require('../lib/layer_hidden_state_var.js');

var _layer_hidden_state_var2 = _interopRequireDefault(_layer_hidden_state_var);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesheet = {
    default: 'src_client_modules_window_manager_components_window_layer_jsx-stylesheet-default'
};

var WindowLayer = function (_React$Component) {
    _inherits(WindowLayer, _React$Component);

    function WindowLayer() {
        _classCallCheck(this, WindowLayer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowLayer).apply(this, arguments));
    }

    _createClass(WindowLayer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var isOver = _props.isOver;
            var canDrop = _props.canDrop;
            var connectDropTarget = _props.connectDropTarget;
            var children = _props.children;

            return connectDropTarget(_react2.default.createElement(
                'div',
                {
                    className: stylesheet.default,
                    style: {
                        zIndex: this.props.index * _window_layer.WindowLayerDepth + 1,
                        pointerEvents: this.props.layerHidden ? 'none' : ''
                    }
                },
                this.props.windows.map(function (_window, index) {
                    return _react2.default.createElement(_window3.default, _extends({
                        key: _window._id,
                        index: index,
                        LocalState: _this2.props.LocalState,
                        parent_id: _this2.props._id,
                        hideLayer: _this2.hideLayer.bind(_this2),
                        unhideLayer: _this2.unhideLayer.bind(_this2),
                        grabFocus: _this2.grabFocus.bind(_this2),
                        splitV: _this2.splitV.bind(_this2),
                        splitH: _this2.splitH.bind(_this2),
                        moveDivider: _this2.moveDivider.bind(_this2),
                        actions: _this2.props.actions,
                        zIndex: _this2.props.index * _window_layer.WindowLayerDepth + index + 2 }, _window));
                })
            ));
        }

        // These functions need to exist to click and drag windows that are "lower" layer

    }, {
        key: 'hideLayer',
        value: function hideLayer() {
            this.props.LocalState.set((0, _layer_hidden_state_var2.default)(this.props._id), true);
        }
    }, {
        key: 'unhideLayer',
        value: function unhideLayer() {
            this.props.LocalState.set((0, _layer_hidden_state_var2.default)(this.props._id), false);
        }
    }, {
        key: 'grabFocus',
        value: function grabFocus(index) {
            this.props.actions.updateWindowGrabFocus(this.props.index, index);
        }
    }, {
        key: 'splitV',
        value: function splitV(index, path) {
            this.props.actions.updateWindowSplitPaneVertical(this.props.index, index, path);
        }
    }, {
        key: 'splitH',
        value: function splitH(index, path) {
            this.props.actions.updateWindowSplitPaneHorizontal(this.props.index, index, path);
        }
    }, {
        key: 'moveDivider',
        value: function moveDivider(index, path, percentage) {
            this.props.actions.updateWindowMoveDivider(this.props.index, index, path, percentage);
        }
    }]);

    return WindowLayer;
}(_react2.default.Component);

exports.default = WindowLayer;