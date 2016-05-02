'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactKomposer = require('react-komposer');

var _application_manager = require('../components/application_manager.js');

var _application_manager2 = _interopRequireDefault(_application_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = function composer(props, onData) {
    if (props.ApplicationManager.applications.length > 0) {
        props.ApplicationManager.applications.last().windows.last().focused = true;
    }

    onData(null, {});
};

exports.default = (0, _reactKomposer.composeWithTracker)(composer)(_application_manager2.default);