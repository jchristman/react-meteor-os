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

var _reactDnd = require('react-dnd');

var _window_preview_position = require('../../window/components/window_preview_position.js');

var _window_preview_position2 = _interopRequireDefault(_window_preview_position);

var _window_preview_resize = require('../../window/components/window_preview_resize.js');

var _window_preview_resize2 = _interopRequireDefault(_window_preview_resize);

var _drag_types = require('../../window/configs/drag_types.js');

var dragTypes = _interopRequireWildcard(_drag_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CustomDragLayer: {
        displayName: 'CustomDragLayer'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/client/modules/window_manager/components/custom_drag_layer.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/client/modules/window_manager/components/custom_drag_layer.jsx',
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
    default: 'src_client_modules_window_manager_components_custom_drag_layer_jsx-stylesheet-default'
};

var CustomDragLayer = _wrapComponent('CustomDragLayer')(function (_React$Component) {
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
                    return _react3.default.createElement(_window_preview_position2.default, _extends({}, item, currentOffset, { pointer: currentPointer }));
                case dragTypes.windowResizerType:
                    return _react3.default.createElement(_window_preview_resize2.default, _extends({}, item, currentOffset));
                default:
                    return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.isDragging || this.props.itemType !== this.props._id) return null;

            return _react3.default.createElement(
                'div',
                { className: stylesheet.default },
                this.renderItem()
            );
        }
    }]);

    return CustomDragLayer;
}(_react3.default.Component));

exports.default = CustomDragLayer;