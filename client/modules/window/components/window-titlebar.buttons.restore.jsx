import React from 'react';
import {buttonStyles} from './window-titlebar.buttons.jsx';

const style = (props) => {
    return _.extend(buttonStyles(props), {
        backgroundPosition: '-18px -1px'
    });
}

const WindowTitleBarButtonsRestore = (props) => (
    <div 
        className="glyphicon glyphicon-share-alt" 
        onClick={props.restoreWindow}
        style={style(props)}
        onMouseEnter={() => props.onHover.start(props)}
        onMouseLeave={() => props.onHover.end(props)}
        >
    </div>
);

export default WindowTitleBarButtonsRestore;
