'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, _window, top, left, width, height) {
    var changePosition = props.actions.changePosition;

    var windowPath = props.index + '.windows.' + _window.index + '.position';
    changePosition(windowPath, top, left, width, height);
};