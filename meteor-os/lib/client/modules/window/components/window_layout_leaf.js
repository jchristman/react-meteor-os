'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _window_plain = require('./window_plain.js');

var _window_plain2 = _interopRequireDefault(_window_plain);

var _window_tabbed = require('./window_tabbed.js');

var _window_tabbed2 = _interopRequireDefault(_window_tabbed);

var _constants = require('../../../configs/constants');

var Constants = _interopRequireWildcard(_constants);

var _themes = require('../../../configs/themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_layout_leaf_jsx-stylesheet-default'
};

var leaf_type_switch = function leaf_type_switch(props) {
    switch (props.leaf_type) {
        case Constants.LeafTypes.Plain:
            return _react2.default.createElement(_window_plain2.default, props);
        case Constants.LeafTypes.Tabbed:
            return _react2.default.createElement(_window_tabbed2.default, props);
        default:
            return 'Unknown leaf type: ' + props.leaf_type;
    }
};

var WindowLayoutLeaf = function WindowLayoutLeaf(props) {
    var classes = (0, _classnames2.default)(stylesheet.default, _themes2.default.Default.secondary_colors);
    return props.connectDropTarget(_react2.default.createElement(
        'div',
        { className: classes },
        leaf_type_switch(props)
    ));
};

exports.default = WindowLayoutLeaf;