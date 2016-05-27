'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mantraCore = require('mantra-core');

var _wrapper = require('./wrapper.js');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _local_state_var = require('../configs/local_state_var.js');

var _local_state_var2 = _interopRequireDefault(_local_state_var);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = function composer(_ref, onData) {
    var context = _ref.context;
    var stateVar = _ref.stateVar;

    var _context = context();

    var LocalState = _context.LocalState;

    // This is here so that the local state actions know which LocalState var to modify

    LocalState.setDefault(_local_state_var2.default, stateVar);

    var ApplicationManager = {
        applications: LocalState.get(stateVar)
    };

    onData(null, { ApplicationManager: ApplicationManager });
};

// Here we inject the application context and local state actions as dependencies into this container
var depsMapper = function depsMapper(_context2, actions) {
    return {
        actions: actions.localStateActions,
        context: function context() {
            return _context2;
        }
    };
};

exports.default = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_wrapper2.default);