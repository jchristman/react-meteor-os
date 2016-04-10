import React from 'react';

import { WindowTitleBarButtonsClose, WindowTitleBarButtonsMaximize,
         WindowTitleBarButtonsRestore, WindowTitleBarButtonsMinimize} from '../containers/window-titlebar.buttons.button.js';

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
        background: props.hover ? '#ddd' : '#ccc'
    };
}

const WindowTitleBarButtons = (props) => (
    <div>
        <WindowTitleBarButtonsClose hoverVar='_close_button_hover' {...props}/>
        <WindowTitleBarButtonsMaximize hoverVar='_maximize_button_hover' {...props}/>
        <WindowTitleBarButtonsRestore hoverVar='_restore_button_hover' {...props}/>
        <WindowTitleBarButtonsMinimize hoverVar='_minimize_button_hover' {...props}/>
    </div>
);

export default WindowTitleBarButtons;
