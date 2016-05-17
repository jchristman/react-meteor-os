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

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    WindowContentLayoutLeaf: {
        displayName: 'WindowContentLayoutLeaf'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/client/modules/window/components/window_content_layout_leaf.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/client/modules/window/components/window_content_layout_leaf.jsx',
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
    leaf: 'src_client_modules_window_components_window_content_layout_leaf_jsx-stylesheet-leaf',
    container: 'src_client_modules_window_components_window_content_layout_leaf_jsx-stylesheet-container'
};

var WindowContentLayoutLeaf = _wrapComponent('WindowContentLayoutLeaf')(function (_React$Component) {
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

            return this.props.connectDropTarget(_react3.default.createElement(
                'div',
                { className: leaf_classes },
                props.connectContextMenu(_react3.default.createElement(
                    'div',
                    { className: stylesheet.container },
                    _react3.default.createElement(
                        'div',
                        { style: { display: 'inline-block', whiteSpace: 'nowrap' } },
                        'Text text text text text text'
                    )
                ))
            ));
        }
    }]);

    return WindowContentLayoutLeaf;
}(_react3.default.Component));

exports.default = WindowContentLayoutLeaf;