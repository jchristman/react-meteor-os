import React from 'react';
import cx from 'classnames';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 25,
        right: 1,
        left: 1,
        bottom: 2,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'inset',
        borderColor: '#9B9DC9',
        borderBottom: 0,
        borderRadius: 4,
        overflow: 'hidden'
    }
});

const WindowContent = (props) => {
    const classes = cx(stylesheet.default);
    return (
        <div className={classes}>Content</div>
    );
}

export default WindowContent;
