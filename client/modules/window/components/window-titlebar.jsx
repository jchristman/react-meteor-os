import React from 'react';
import cx from 'classnames';

import WindowTitleBarIcon from './window-titlebar.icon.jsx';
import WindowTitleBarText from './window-titlebar.text.jsx';
import WindowTitleBarButtons from './window-titlebar.buttons.jsx';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        height: 24,
        overflow: 'hidden',
        cursor: 'move',
        backgroundColor: '#AAB',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#002c57'
    },

    focused: {
        backgroundColor: '#036'
    }
});

const renderTitleBar = (props) => {
    const classes = cx(stylesheet.default, props.focused && stylesheet.focused);
    return (
        <div className={classes}>
            <WindowTitleBarIcon {...props}/>
            <WindowTitleBarText title={props.title}/>
            <WindowTitleBarButtons {...props}/>
        </div>
    );
};

const WindowTitleBar = (props) => {
    return props.connectDragSource !== undefined ?
                props.connectDragSource(renderTitleBar(props)) :
                renderTitleBar(props)
};

export default WindowTitleBar;
