'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _preview_window_position = require('../../window/components/preview_window_position.js');

var _preview_window_position2 = _interopRequireDefault(_preview_window_position);

var _preview_window_resize = require('../../window/components/preview_window_resize.js');

var _preview_window_resize2 = _interopRequireDefault(_preview_window_resize);

var _preview_window_content_layout = require('../../window/components/preview_window_content_layout.js');

var _preview_window_content_layout2 = _interopRequireDefault(_preview_window_content_layout);

var _drag_types = require('../../window/configs/drag_types.js');

var dragTypes = _interopRequireWildcard(_drag_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesheet = {
    default: 'src_client_modules_window_manager_components_custom_drag_layer_jsx-stylesheet-default'
};

var CustomDragLayer = function (_React$Component) {
    _inherits(CustomDragLayer, _React$Component);

    function CustomDragLayer() {
        _classCallCheck(this, CustomDragLayer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomDragLayer).apply(this, arguments));
    }

    _createClass(CustomDragLayer, [{
        key: 'renderItem',
        value: function renderItem() {
            var _props = this.props;
            var item = _props.item;
            var currentOffset = _props.currentOffset;
            var currentPointer = _props.currentPointer;

            switch (item.dragType) {
                case dragTypes.windowPositionType:
                    return _react2.default.createElement(_preview_window_position2.default, _extends({}, item, currentOffset, { pointer: currentPointer }));
                case dragTypes.windowResizerType:
                    return _react2.default.createElement(_preview_window_resize2.default, _extends({}, item, currentOffset));
                case dragTypes.dividerType:
                    return _react2.default.createElement(_preview_window_content_layout2.default, _extends({}, item, currentOffset, { pointer: currentPointer }));
                default:
                    return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.isDragging || this.props.item.dragType === undefined) return null;

            return _react2.default.createElement(
                'div',
                { className: stylesheet.default },
                this.renderItem()
            );
        }
    }]);

    return CustomDragLayer;
}(_react2.default.Component);

exports.default = CustomDragLayer;