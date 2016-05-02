'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var windowManagerUpdate = function windowManagerUpdate(context, updatedWindow) {
    var LocalState = context.LocalState;

    console.log('Updating window', context, updatedWindow);
};

exports.default = {
    windowManagerUpdate: windowManagerUpdate
};