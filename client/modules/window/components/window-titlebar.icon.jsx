import React from 'react';

const style = {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    overflow: 'hidden'
};

const WindowTitleBarIcon = (props) => (
    <img
        src="/favicon.ico"
        style={style}
    />
);

export default WindowTitleBarIcon;
