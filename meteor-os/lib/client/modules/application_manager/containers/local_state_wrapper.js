'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactKomposer = require('react-komposer');

var _mantraCore = require('mantra-core');

var _wrapper = require('./wrapper.js');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = function composer(props, onData) {
    var LocalState = props.LocalState;
    var stateVar = props.stateVar;


    var ApplicationManager = {
        applications: LocalState.get(stateVar)
    };

    onData(null, { ApplicationManager: ApplicationManager });
};

var depsMapper = function depsMapper(props, actions) {
    return actions.localStateActions;
};

exports.default = (0, _reactKomposer.composeAll)((0, _reactKomposer.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_wrapper2.default);