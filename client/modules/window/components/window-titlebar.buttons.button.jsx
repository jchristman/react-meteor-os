import React from 'react';
import cx from 'classnames';
import cancelBubble from '../lib/cancelBubble.js';

const WindowTitleBarButton = (props) => {
    const classes = cx(props.classes);
    return (
        <div 
            className={classes}
            onMouseDown={cancelBubble}
            onClick={props.onClick}
            >
        </div>
    );
};

export default WindowTitleBarButton;
