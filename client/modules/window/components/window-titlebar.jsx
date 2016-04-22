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
        backgroundColor: '#D6D2D0'
    }
});

const renderTitleBar = (props) => {
    const classes = cx(stylesheet.default);
    return (
        <div className={classes}>
            <WindowTitleBarIcon {...props}/>
            <WindowTitleBarText title={props.title} focused={props.focused}/>
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
