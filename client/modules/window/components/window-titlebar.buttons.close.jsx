import React from 'react';
import {buttonStyles} from './window-titlebar.buttons.jsx';

const style = (props) => {
    return _.extend(buttonStyles(props), {
        backgroundPosition: '-47px -1px'
    });
}

const WindowTitleBarButtonsClose = (props) => (
    <div 
        className="glyphicon glyphicon-remove" 
        onClick={props.closeWindow}
        style={style(props)}
        onMouseEnter={() => props.onHover.start(props)}
        onMouseLeave={() => props.onHover.end(props)}
        >
    </div>
);

export default WindowTitleBarButtonsClose;
