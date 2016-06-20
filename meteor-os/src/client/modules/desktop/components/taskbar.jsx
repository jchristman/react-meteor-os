import React from 'react';

const Taskbar = (props) => {
    return (
        <div className={stylesheet.taskbar}>
        </div>
    );
}

const stylesheet = cssInJS({
    taskbar: {
        position: 'absolute',
        top: 'calc(100% - 40px)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#111111'
    }
});

export default Taskbar;
