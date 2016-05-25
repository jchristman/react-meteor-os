'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Constants = exports.Components = exports.Modules = undefined;

var _application_manager = require('./modules/application_manager');

var _application_manager2 = _interopRequireDefault(_application_manager);

var _window_manager = require('./modules/window_manager');

var _window_manager2 = _interopRequireDefault(_window_manager);

var _window = require('./modules/window');

var _window2 = _interopRequireDefault(_window);

var _application_manager_wrapper = require('./modules/application_manager/components/application_manager_wrapper.js');

var _application_manager_wrapper2 = _interopRequireDefault(_application_manager_wrapper);

var _window3 = require('./modules/window/components/window.js');

var _window4 = _interopRequireDefault(_window3);

var _constants = require('./configs/constants');

var Constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modules = exports.Modules = {
    ApplicationManagerModule: _application_manager2.default,
    WindowManagerModule: _window_manager2.default,
    WindowModule: _window2.default
};

var Components = exports.Components = {
    ApplicationManager: _application_manager_wrapper2.default,
    Window: _window4.default
};

exports.Constants = Constants;