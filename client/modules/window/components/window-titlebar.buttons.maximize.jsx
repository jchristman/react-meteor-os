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
        onClick={props.maximizeWindow}
        style={style(props)}
        onMouseEnter={() => props.onHover.start(props)}
        onMouseLeave={() => props.onHover.end(props)}
        >
    </div>
);

export default WindowTitleBarButtonsMaximize;
