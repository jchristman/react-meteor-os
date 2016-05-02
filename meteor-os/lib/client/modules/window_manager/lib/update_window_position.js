'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, _window, top, left, width, height) {
    var updateWindowPosition = props.actions.updateWindowPosition;

    var windowPath = props.index + '.windows.' + _window.index + '.position';
    updateWindowPosition(windowPath, top, left, width, height);
};