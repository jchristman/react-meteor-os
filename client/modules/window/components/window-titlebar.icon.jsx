import React from 'react';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 4,
        left: 4,
        width: 16,
        height: 16,
        overflow: 'hidden'
    }
});

const WindowTitleBarIcon = (props) => (
    <img
        className={stylesheet.default}
        src="/favicon.ico"
    />
);

export default WindowTitleBarIcon;
