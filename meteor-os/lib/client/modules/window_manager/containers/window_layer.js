'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mantraCore = require('mantra-core');

var _reactiveVar = require('meteor/reactive-var');

var _window_layer_drop = require('./window_layer_drop.js');

var _window_layer_drop2 = _interopRequireDefault(_window_layer_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = function composer(_ref, onData) {
    var layerHiddenVar = _ref.layerHiddenVar;

    var layerHidden = layerHiddenVar.get();
    onData(null, { layerHidden: layerHidden });
};

var depsMapper = function depsMapper(_context) {
    var layerHiddenVar = new _reactiveVar.ReactiveVar(true);
    var hideLayer = function hideLayer() {
        return layerHiddenVar.set(true);
    };
    var unhideLayer = function unhideLayer() {
        return layerHiddenVar.set(false);
    };
    return {
        layerHiddenVar: layerHiddenVar,
        hideLayer: hideLayer,
        unhideLayer: unhideLayer,
        context: function context() {
            return _context;
        }
    };
};

exports.default = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_window_layer_drop2.default);