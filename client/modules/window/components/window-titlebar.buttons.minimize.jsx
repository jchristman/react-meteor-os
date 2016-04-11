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
        onClick={props.minimizeWindow}
        style={style(props)}
        onMouseEnter={() => props.onHover.start(props)}
        onMouseLeave={() => props.onHover.end(props)}
        >
    </div>
);

export default WindowTitleBarButtonsMinimize;
