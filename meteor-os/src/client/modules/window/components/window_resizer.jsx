import React from 'react';
import cx from 'classnames';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        cursor: 'default'
    },

    nw: {
        top: -2,
        left: -2,
        width: 6,
        height: 6,
        cursor: 'nwse-resize'
    },

    n: {
        top: -2,
        left: 6,
        right: 6,
        height: 6,
        cursor: 'ns-resize'
    },

    ne: {
        top: -2,
        right: -2,
        width: 6,
        height: 6,
        cursor: 'nesw-resize'
    },

    e: {
        top: 6,
        bottom: 6,
        right: -2,
        width: 6,
        cursor: 'ew-resize'
    },

    se: {
        bottom: -2,
        right: -2,
        width: 6,
        height: 6,
        cursor: 'nwse-resize'
    },

    s: {
        bottom: -2,
        left: 6,
        right: 6,
        height: 6,
        cursor: 'ns-resize'
    },

    sw: {
        bottom: -2,
        left: -2,
        width: 6,
        height: 6,
        cursor: 'nesw-resize'
    },

    w: {
        top: 6,
        bottom: 6,
        left: -2,
        width: 6,
        cursor: 'ew-resize'
    }
});

const WindowResizer = (props) => {
    const classes = cx(stylesheet.default, stylesheet[props.which]);

    return props.connectDragSource(
        <div className={classes}></div>
    );
};

export default WindowResizer;
