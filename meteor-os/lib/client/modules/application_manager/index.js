'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _method_stubs = require('./configs/method_stubs');

var _method_stubs2 = _interopRequireDefault(_method_stubs);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    actions: _actions2.default,
    load: function load(context) {
        (0, _method_stubs2.default)(context);
    }
};