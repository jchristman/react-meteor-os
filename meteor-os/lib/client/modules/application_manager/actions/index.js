'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _collection_source_actions = require('./collection_source_actions.js');

var _collection_source_actions2 = _interopRequireDefault(_collection_source_actions);

var _local_state_actions = require('./local_state_actions.js');

var _local_state_actions2 = _interopRequireDefault(_local_state_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    collectionActions: _collection_source_actions2.default,
    localStateActions: _local_state_actions2.default
};