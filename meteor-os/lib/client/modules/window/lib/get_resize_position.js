'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (which, x, y, pos) {
    var props = { which: which, x: x, y: y, position: pos };
    var position = {};
    switch (props.which) {
        case 'nw':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.x;
            break;
        case 'n':
            position.width = props.position.width;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.position.left;
            break;
        case 'ne':
            position.width = props.x - props.position.left;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.position.left;
            break;
        case 'w':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.position.height;
            position.top = props.position.top;
            position.left = props.x;
            break;
        case 'e':
            position.width = props.x - props.position.left;
            position.height = props.position.height;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
        case 'sw':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.x;
            break;
        case 's':
            position.width = props.position.width;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
        case 'se':
            position.width = props.x - props.position.left;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
    }

    if (position.width < 0) {
        position.left = position.left + position.width;
        position.width = Math.abs(position.width);
    }

    if (position.height < 0) {
        position.top = position.top + position.height;
        position.height = Math.abs(position.height);
    }

    return position;
};