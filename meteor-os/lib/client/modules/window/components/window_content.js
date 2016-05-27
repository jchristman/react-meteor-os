'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../../configs/constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesheet = {
    prewrap: 'src_client_modules_window_components_window_content_jsx-stylesheet-prewrap',
    nowrap: 'src_client_modules_window_components_window_content_jsx-stylesheet-nowrap'
};

var type_switch = function type_switch(props) {
    switch (props.content_type) {
        case Constants.ContentTypes.Text:
            return props.content;
            break;
        case Constants.ContentTypes.Component:
            return 'Unknown component: ' + props.content;
            break;
        default:
            return 'Unsupported content type: ' + props.content_type;
    }
};

var WindowContent = function WindowContent(props) {
    var classes = (0, _classnames2.default)(props.content_type === Constants.ContentTypes.Text && stylesheet.prewrap || stylesheet.nowrap);
    return _react2.default.createElement(
        'div',
        { className: classes },
        type_switch(props)
    );
};

exports.default = WindowContent;