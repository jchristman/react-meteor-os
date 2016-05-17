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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMenus = require('react-menus');

var _reactMenus2 = _interopRequireDefault(_reactMenus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    _component: {
        isInFunction: true
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/client/modules/context_menu/context_menu.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
    filename: 'src/client/modules/context_menu/context_menu.jsx',
    components: _components,
    locals: [],
    imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
    };
}
//import invariant from 'invariant';


var theme = {};

var id = '_meteor_os_context_menu_container';

var ContextMenu = function ContextMenu(menu_items) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // Merge themes if they exist
    if (options.theme && options.theme.style) {
        for (var attrname in options.theme.style) {
            theme.style[attrname] = options.theme.style[attrname];
        }
    }

    return function (ChildComponent) {
        var Container = _wrapComponent('_component')(function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class(props, context) {
                _classCallCheck(this, _class);

                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, props, context));

                _this.state = {
                    showContextMenu: false,
                    x: 0,
                    y: 0
                };

                // needed to add and remove event listeners....
                _this.clickable_element = undefined;
                _this.force_hide = _this.force_hide.bind(_this);
                _this.hide = _this.hide.bind(_this);
                _this.show = _this.show.bind(_this);
                return _this;
            }

            _createClass(_class, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.child = _reactDom2.default.findDOMNode(this);
                    this.container = document.createElement('div');
                    this.container.style.position = 'absolute';
                    this.container.style.top = 0;
                    this.container.style.left = 0;
                    this.container.style.width = 0;
                    this.container.style.height = 0;
                    this.child.appendChild(this.container);

                    // Note that we are not using .bind(this), because we need to remove
                    // the listener later. The bind happens in the constructor
                    if (document.addEventListener) {
                        document.addEventListener('click', this.force_hide, false);
                        document.addEventListener('contextmenu', this.hide, false);
                        this.clickable_element.addEventListener('contextmenu', this.show, false);
                    } else {
                        document.attachEvent('onclick', this.force_hide);
                        document.attachEvent('oncontextmenu', this.hide);
                        this.clickable_element.attachEvent('oncontextmenu', this.show);
                    }

                    this._renderLayer();
                }
            }, {
                key: 'componentDidUpdate',
                value: function componentDidUpdate() {
                    this._renderLayer();
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    _reactDom2.default.unmountComponentAtNode(this.container);

                    // Note that we are not using .bind(this), because we need to remove
                    // the listener later. The bind happens in the constructor
                    if (document.removeEventListener) {
                        document.removeEventListener('click', this.force_hide, false);
                        document.removeEventListener('contextmenu', this.hide, false);
                        this.clickable_element && this.clickable_element.removeEventListener('contextmenu', this.show, false);
                    } else {
                        document.detachEvent('onclick', this.force_hide);
                        document.detachEvent('oncontextmenu', this.hide);
                        this.clickable_element && this.clickable_element.detachEvent('oncontextmenu', this.show, false);
                    }
                }
            }, {
                key: '_renderLayer',
                value: function _renderLayer() {
                    var _this2 = this;

                    if (this.state.showContextMenu) {
                        // If the menu_items var is a function, let's call it with the props.
                        menu_items = typeof menu_items === 'function' ? menu_items(this.props) : menu_items;

                        // Then correct the items to fix their onClick methods to be useful and have the props of the clicked element
                        var wrapped_menu_items = menu_items.map(function (item) {
                            // Copy the item
                            var new_item = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? _.extend({}, item) : item;
                            if (new_item.onClick !== undefined) new_item.onClick = function (event, item_props, index) {
                                item.onClick(event, _this2.props, index);
                            };
                            return new_item;
                        });

                        // Finally, render it to the container
                        _reactDom2.default.render(_react3.default.createElement(_reactMenus2.default, { theme: theme, items: wrapped_menu_items, at: [this.state.x, this.state.y] }), this.container);
                    } else {
                        _reactDom2.default.unmountComponentAtNode(this.container);
                    }
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react3.default.createElement(ChildComponent, _extends({}, this.props, {
                        show_context_menu: this.show.bind(this),
                        hide_context_menu: this.hide.bind(this),
                        connectContextMenu: this.connectContextMenu.bind(this)
                    }));
                }
            }, {
                key: 'cloneWithRef',
                value: function cloneWithRef(element, newRef) {
                    var previousRef = element.ref;
                    //invariant(typeof previousRef !== 'string',
                    //    'Cannot connect ContextMenu to an element with an existing string ref.');

                    if (!previousRef) {
                        return (0, _react2.cloneElement)(element, { ref: newRef });
                    }

                    return (0, _react2.cloneElement)(element, {
                        ref: function ref(node) {
                            newRef(node);
                            previousRef && previousRef(node);
                        }
                    });
                }

                // ----- Context Menu Methods ----- //

            }, {
                key: 'connectContextMenu',
                value: function connectContextMenu(react_element) {
                    var _this3 = this;

                    this.clickable_react_element = react_element;
                    this.clickable_react_element = this.cloneWithRef(this.clickable_react_element, function (node) {
                        return _this3.clickable_element = node;
                    });
                    return this.clickable_react_element;
                }
            }, {
                key: 'show',
                value: function show(event) {
                    event.preventDefault();

                    var bounds = event.target.getBoundingClientRect();
                    var x = event.clientX - bounds.left;
                    var y = event.clientY - bounds.top;

                    var state = { x: x, y: y, showContextMenu: true };
                    this.setState(state);
                }
            }, {
                key: 'force_hide',
                value: function force_hide(event) {
                    this.hide(event, true);
                }
            }, {
                key: 'hide',
                value: function hide(event, force) {
                    if (event.target !== this.clickable_element || force) {
                        var state = { showContextMenu: false };
                        this.setState(state);
                    }
                }
            }]);

            return _class;
        }(_react3.default.Component));

        return Container;
    };
};

exports.default = ContextMenu;