import React from 'react';
import cx from 'classnames';

const WindowTitleBarButton = (props) => {
    const classes = cx(props.classes);
    return (
        <div 
            className={classes}
            onClick={props.onClick}
            >
        </div>
    );
};

export default WindowTitleBarButton;
