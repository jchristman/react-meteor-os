import React from 'react';
import {buttonStyles} from './window-titlebar.buttons.jsx';

const style = (props) => {
    return _.extend(buttonStyles(props), {
        backgroundPosition: '-32px -1px'
    });
}

const WindowTitleBarButtonsMaximize = (props) => (
    <div 
        className="glyphicon glyphicon-plus" 
        title="maximize" 
        onClick={props.maximizeWindow}
        style={style(props)}>
    </div>
);

export default WindowTitleBarButtonsMaximize;
