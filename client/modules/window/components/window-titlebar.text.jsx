import React from 'react';

const style = {
    position: 'absolute',
    top: 2,
    left: 24,
    right: 0,
    bottom: 0,
    color: 'white',
    fontWeight: 'bold',
    overflow: 'hidden'
};

const WindowTitleBarText = (props) => (
    <div style={style}>{props.title}</div>
);

export default WindowTitleBarText;
