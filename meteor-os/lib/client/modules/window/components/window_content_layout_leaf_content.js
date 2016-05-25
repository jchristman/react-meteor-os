'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../../../configs/constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    default: 'src_client_modules_window_components_window_content_layout_leaf_content_jsx-stylesheet-default'
};

var type_switch = function type_switch(props) {
    switch (props.type) {
        case Constants.Types.Text:
            return props.content;
            break;
        case Constants.Types.Component:
            console.log('Component type');
            break;
        default:
            throw new Error('Unsupported content type: ' + props.type);
    }
};

var WindowContentLayoutLeafContent = function WindowContentLayoutLeafContent(props) {
    return _react2.default.createElement(
        'div',
        { className: stylesheet.default },
        type_switch(props)
    );
};

exports.default = WindowContentLayoutLeafContent;