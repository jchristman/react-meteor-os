'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactKomposer = require('react-komposer');

var _mantraCore = require('mantra-core');

var _wrapper = require('./wrapper.js');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _local_state_var = require('../configs/local_state_var.js');

var _local_state_var2 = _interopRequireDefault(_local_state_var);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = function composer(props, onData) {
    var LocalState = props.LocalState;
    var stateVar = props.stateVar;

    LocalState.setDefault(_local_state_var2.default, stateVar);

    var ApplicationManager = {
        applications: LocalState.get(stateVar)
    };

    onData(null, { ApplicationManager: ApplicationManager });
};

var depsMapper = function depsMapper(props, actions) {
    return {
        actions: actions.localStateActions
    };
};

exports.default = (0, _reactKomposer.composeAll)((0, _reactKomposer.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_wrapper2.default);