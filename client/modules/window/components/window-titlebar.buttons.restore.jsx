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
        title="restore" 
        onClick={props.restoreWindow}
        style={style(props)}>
    </div>
);

export default WindowTitleBarButtonsRestore;
