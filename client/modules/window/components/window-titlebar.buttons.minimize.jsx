import React from 'react';
import {buttonStyles} from './window-titlebar.buttons.jsx';

const style = (props) => {
    return _.extend(buttonStyles(props), {
        backgroundPosition: '-3px 0px'
    });
}

const WindowTitleBarButtonsMinimize = (props) => (
    <div 
        className="glyphicon glyphicon-minus" 
        title="minimize" 
        onClick={props.minimizeWindow}
        style={style(props)}>
    </div>
);

export default WindowTitleBarButtonsMinimize;
