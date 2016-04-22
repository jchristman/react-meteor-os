import React from 'react';
import cx from 'classnames';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 2,
        left: 24,
        right: 0,
        bottom: 0,
        color: '#898688',
        textShadow: '1px 1px 1px #AAAAAA',
        overflow: 'hidden'
    },

    focused: {
        color: '#362922',
        textShadow: '1px 1px 1px #888888'
    }
});

const WindowTitleBarText = (props) => {
    const classes = cx(stylesheet.default, props.focused && stylesheet.focused);

    return (
        <div className={classes}>{props.title}</div>
    );
}

export default WindowTitleBarText;
