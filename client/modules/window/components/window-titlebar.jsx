import React from 'react';

import WindowTitleBarIcon from './window-titlebar.icon.jsx';
import WindowTitleBarText from './window-titlebar.text.jsx';
import WindowTitleBarButtons from './window-titlebar.buttons.jsx';

const style = (props) => {
    return {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        height: 24,
        overflow: 'hidden',
        backgroundColor: props.focused ? '#036' : '#AAB',
        cursor: 'move',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#002c57'
    };
}

const renderTitleBar = (props) => (
    <div style={style(props)}>
        <WindowTitleBarIcon {...props}/>
        <WindowTitleBarText title={props.title}/>
        <WindowTitleBarButtons {...props}/>
    </div>
);

const WindowTitleBar = (props) => {
    return props.connectDragSource !== undefined ?
                props.connectDragSource(renderTitleBar(props)) :
                renderTitleBar(props)
};

export default WindowTitleBar;
