import React from 'react';

import {    WindowTitleBarButtonsClose, WindowTitleBarButtonsMaximize,
            WindowTitleBarButtonsRestore, WindowTitleBarButtonsMinimize,
            hoverVarId } from '../containers/window-titlebar.buttons.button.js';

const style = {
    position: 'absolute',
    top: 0,
    right: 2,
    bottom: 0,
    width: 59
}

export const buttonStyles = (props) => {
    return {
        float: 'right',
        marginTop: 2,
        marginRight: 1,
        marginBottom: 0,
        marginLeft: 0,
        width: 17,
        height: 17,
        borderWidth: 1,
        borderStyle: 'outset',
        borderColor: '#9B9DC9',
        background: props.hover ? '#ddd' : '#ccc',
        cursor: 'pointer'
    };
}

const onHover = {
    start:  (props) => { props.LocalState.set(hoverVarId(props._id, props.hoverVar), true) },
    end:    (props) => { props.LocalState.set(hoverVarId(props._id, props.hoverVar), false) },
}

const WindowTitleBarButtons = (props) => (
    <div>
        <WindowTitleBarButtonsClose hoverVar='_close_button_hover' onHover={onHover} {...props}/>
        <WindowTitleBarButtonsMaximize hoverVar='_maximize_button_hover' onHover={onHover} {...props}/>
        <WindowTitleBarButtonsRestore hoverVar='_restore_button_hover' onHover={onHover} {...props}/>
        <WindowTitleBarButtonsMinimize hoverVar='_minimize_button_hover' onHover={onHover} {...props}/>
    </div>
);

export default WindowTitleBarButtons;