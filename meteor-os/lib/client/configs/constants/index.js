'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var prefix = '_meteor_os_constants';

// Generate an object of Types
var _Types = {
    Component: 'component',
    Text: 'text'
};
var Types = exports.Types = _.object(_.map(_Types, function (val, key) {
    return [key, prefix + '_types_' + val];
}));