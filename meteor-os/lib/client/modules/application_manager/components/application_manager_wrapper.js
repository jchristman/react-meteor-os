'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _collection_wrapper = require('../containers/collection_wrapper.js');

var _collection_wrapper2 = _interopRequireDefault(_collection_wrapper);

var _local_state_wrapper = require('../containers/local_state_wrapper.js');

var _local_state_wrapper2 = _interopRequireDefault(_local_state_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper_type_switch = function wrapper_type_switch(props) {
    switch (props.wrapper) {
        case 'collection':
            return _react2.default.createElement(_collection_wrapper2.default, props);
        case 'state':
            return _react2.default.createElement(_local_state_wrapper2.default, props);
        default:
            throw new Error('Unsupported wrapper type: ' + props.wrapper);
            return _react2.default.createElement(
                'div',
                null,
                'Unsupported wrapper type: ',
                props.wrapper
            );
    }
};

var ApplicationManagerWrapper = function ApplicationManagerWrapper(props) {
    return wrapper_type_switch(props);
};

exports.default = ApplicationManagerWrapper;