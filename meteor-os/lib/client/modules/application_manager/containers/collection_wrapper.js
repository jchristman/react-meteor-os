'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactKomposer = require('react-komposer');

var _mantraCore = require('mantra-core');

var _wrapper = require('./wrapper.js');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _application_manager_sub = require('../lib/application_manager_sub.js');

var _application_manager_sub2 = _interopRequireDefault(_application_manager_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Make this an actual mantra container


var composer = function composer(props, onData) {
    var Collections = props.Collections;

    var manager = { applications: [] };

    var ready = (0, _application_manager_sub2.default)(props);
    if (ready) manager = Collections.ApplicationManager.findOne({ userId: 'asdf' }); // TODO: replace with Meteor.user()

    onData(null, { ApplicationManager: manager });
};

var depsMapper = function depsMapper(props, actions) {
    return {
        actions: actions.collectionActions
    };
};

exports.default = (0, _reactKomposer.composeAll)((0, _reactKomposer.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_wrapper2.default);