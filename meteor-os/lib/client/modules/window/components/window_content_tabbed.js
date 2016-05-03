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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _window_content_tabbed_tabbar = require('./window_content_tabbed_tabbar.js');

var _window_content_tabbed_tabbar2 = _interopRequireDefault(_window_content_tabbed_tabbar);

var _window_content_tabbed_tabcontent = require('./window_content_tabbed_tabcontent.js');

var _window_content_tabbed_tabcontent2 = _interopRequireDefault(_window_content_tabbed_tabcontent);

var _get_window_tab_checked_key = require('../lib/get_window_tab_checked_key.js');

var _get_window_tab_checked_key2 = _interopRequireDefault(_get_window_tab_checked_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    WindowContentTabbed: {
        displayName: 'WindowContentTabbed'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/client/modules/window/components/window_content_tabbed.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/client/modules/window/components/window_content_tabbed.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
} // ----- External Imports ----- //


// ----- Component Imports ----- //


// ----- Library Imports ----- //


var stylesheet = {
    tabs: 'src_client_modules_window_components_window_content_tabbed_jsx-stylesheet-tabs'
};

var WindowContentTabbed = _wrapComponent('WindowContentTabbed')(function (_React$Component) {
    _inherits(WindowContentTabbed, _React$Component);

    function WindowContentTabbed() {
        _classCallCheck(this, WindowContentTabbed);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WindowContentTabbed).apply(this, arguments));
    }

    _createClass(WindowContentTabbed, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react3.default.createElement(
                'div',
                { className: stylesheet.tabs },
                _react3.default.createElement(_window_content_tabbed_tabbar2.default, {
                    connectDropTarget: props.connectDropTargetTabbar,
                    isOver: props.isOverTabbar,
                    canDrop: props.canDropContentArea,
                    layer_id: props.layer_id,
                    changeChecked: this.updateSelectedTab.bind(this),
                    content: props.content
                }),
                _react3.default.createElement(_window_content_tabbed_tabcontent2.default, {
                    connectDropTargetMiddle: props.connectDropTargetContentAreaMiddle,
                    connectDropTargetRight: props.connectDropTargetContentAreaRight,
                    connectDropTargetLeft: props.connectDropTargetContentAreaLeft,
                    connectDropTargetBottom: props.connectDropTargetContentAreaBottom,
                    isOverMiddle: props.isOverContentAreaMiddle,
                    isOverRight: props.isOverContentAreaRight,
                    isOverLeft: props.isOverContentAreaLeft,
                    isOverBottom: props.isOverContentAreaBottom,
                    canDrop: props.canDropContentArea,
                    layer_id: props.layer_id,
                    window_id: props.window_id,
                    content: props.content
                })
            );
        }
    }, {
        key: 'updateSelectedTab',
        value: function updateSelectedTab(index) {
            var LocalState = this.props.LocalState;


            LocalState.set((0, _get_window_tab_checked_key2.default)(this.props), index);

            this.props.grabFocus();
        }
    }]);

    return WindowContentTabbed;
}(_react3.default.Component));

exports.default = WindowContentTabbed;