'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getRefName = function getRefName(props) {
    return props.layer_id + '_' + props.window_id;
};

var WindowTabbedTabcontent = function (_React$Component) {
    _inherits(WindowTabbedTabcontent, _React$Component);

    function WindowTabbedTabcontent() {
        _classCallCheck(this, WindowTabbedTabcontent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowTabbedTabcontent).apply(this, arguments));
    }

    _createClass(WindowTabbedTabcontent, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var isOver = props.isOverLeft || props.isOverRight || props.isOverMiddle || props.isOverBottom;
            var isOverSide = props.isOverLeft || props.isOverRight;
            var content_area_classes = (0, _classnames2.default)(stylesheet.content_area, isOver && stylesheet.content_area_hover, isOverSide && stylesheet.content_area_hover_side, props.isOverMiddle && stylesheet.content_area_hover_middle, props.isOverBottom && stylesheet.content_area_hover_bottom);
            var middle_classes = (0, _classnames2.default)(stylesheet.middle_droptarget, props.canDrop && stylesheet.allowPointerEvents);
            var left_classes = (0, _classnames2.default)(stylesheet.left_droptarget, props.canDrop && stylesheet.allowPointerEvents);
            var right_classes = (0, _classnames2.default)(stylesheet.right_droptarget, props.canDrop && stylesheet.allowPointerEvents);
            var bottom_classes = (0, _classnames2.default)(stylesheet.bottom_droptarget, props.canDrop && stylesheet.allowPointerEvents);

            return _react2.default.createElement(
                'div',
                { className: content_area_classes },
                props.content.map(function (tab, index) {
                    var classes = (0, _classnames2.default)(stylesheet.content, tab.checked && stylesheet.content_checked);
                    return _react2.default.createElement(
                        'div',
                        {
                            key: index,
                            className: classes },
                        tab.content
                    );
                }),
                props.connectDropTargetMiddle(_react2.default.createElement('div', { className: middle_classes })),
                props.connectDropTargetLeft(_react2.default.createElement('div', { className: left_classes })),
                props.connectDropTargetRight(_react2.default.createElement('div', { className: right_classes })),
                props.connectDropTargetBottom(_react2.default.createElement('div', { className: bottom_classes }))
            );
        }
    }]);

    return WindowTabbedTabcontent;
}(_react2.default.Component);

var stylesheet = {
    content_area: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_area',
    content_area_hover: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_area_hover',
    content_area_hover_side: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_area_hover_side',
    content_area_hover_middle: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_area_hover_middle',
    content_area_hover_bottom: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_area_hover_bottom',
    content: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content',
    content_checked: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-content_checked',
    middle_droptarget: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-middle_droptarget',
    left_droptarget: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-left_droptarget',
    right_droptarget: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-right_droptarget',
    bottom_droptarget: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-bottom_droptarget',
    allowPointerEvents: 'src_client_modules_window_components_window_tabbed_tabcontent_jsx-stylesheet-allowPointerEvents'
};

exports.default = WindowTabbedTabcontent;