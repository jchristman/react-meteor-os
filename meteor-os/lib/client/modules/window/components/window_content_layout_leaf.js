'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _window_content_layout_leaf_content = require('./window_content_layout_leaf_content.js');

var _window_content_layout_leaf_content2 = _interopRequireDefault(_window_content_layout_leaf_content);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesheet = {
    leaf: 'src_client_modules_window_components_window_content_layout_leaf_jsx-stylesheet-leaf',
    container: 'src_client_modules_window_components_window_content_layout_leaf_jsx-stylesheet-container'
};

var WindowContentLayoutLeaf = function (_React$Component) {
    _inherits(WindowContentLayoutLeaf, _React$Component);

    function WindowContentLayoutLeaf() {
        _classCallCheck(this, WindowContentLayoutLeaf);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowContentLayoutLeaf).apply(this, arguments));
    }

    _createClass(WindowContentLayoutLeaf, [{
        key: 'render',
        value: function render() {
            var props = this.props;


            var tabs = _.filter(props.tabs, function (tab) {
                return tab._id === props._id;
            });
            var leaf_classes = (0, _classnames2.default)(stylesheet.leaf, _themes2.default.Default.secondary_colors);

            var content = {};
            if (props.layout !== undefined) {
                content.content = props.layout.content;
                content.type = props.layout.type;
            } else {
                content.content = props.content;
                content.type = props.type;
            }
            console.log(content);

            return this.props.connectDropTarget(_react2.default.createElement(
                'div',
                { className: leaf_classes },
                props.connectContextMenu(_react2.default.createElement(
                    'div',
                    { className: stylesheet.container },
                    _react2.default.createElement(_window_content_layout_leaf_content2.default, content)
                ))
            ));
        }
    }]);

    return WindowContentLayoutLeaf;
}(_react2.default.Component);

exports.default = WindowContentLayoutLeaf;