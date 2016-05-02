'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _random = require('meteor/random');

var _random2 = _interopRequireDefault(_random);

var _check = require('meteor/check');

var _check2 = _interopRequireDefault(_check);

var _window2 = require('./window.js');

var _window3 = _interopRequireDefault(_window2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application(name) {
        _classCallCheck(this, Application);

        (0, _check2.default)(name, String);

        this.__id = _random2.default.id();
        this._name = name;
        this._windows = [];
    }

    _createClass(Application, [{
        key: 'newWindow',
        value: function newWindow() {
            var _window = new _window3.default();
            this._windows.push(_window);
            return _window;
        }
    }, {
        key: '_id',
        get: function get() {
            return this.__id;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }]);

    return Application;
}();

exports.default = Application;