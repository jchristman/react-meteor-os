'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _random = require('meteor/random');

var _random2 = _interopRequireDefault(_random);

var _check = require('meteor/check');

var _check2 = _interopRequireDefault(_check);

var _windowTypes = require('../windowTypes.js');

var windowTypes = _interopRequireWildcard(_windowTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Window = function () {
    function Window(type) {
        _classCallCheck(this, Window);

        (0, _check2.default)(type, String);

        this.__id = _random2.default.id();
        this._type = type;
        this._title = '';
        this._position = { top: 0, left: 0, width: 400, height: 500 };

        this._panes = {};
    }

    _createClass(Window, [{
        key: '_id',
        get: function get() {
            return this.__id;
        }
    }, {
        key: 'title',
        get: function get() {
            return this._title;
        },
        set: function set(title) {
            (0, _check2.default)(title, String);

            this._title = title;
        }
    }, {
        key: 'position',
        get: function get() {
            return this._position;
        },
        set: function set(_ref) {
            var top = _ref.top;
            var left = _ref.left;
            var width = _ref.width;
            var height = _ref.height;

            (0, _check2.default)(top, Number);
            (0, _check2.default)(left, Number);
            (0, _check2.default)(width, Number);
            (0, _check2.default)(height, Number);

            this._position = { top: top, left: left, width: width, height: height };
        }
    }]);

    return Window;
}();

exports.default = Window;