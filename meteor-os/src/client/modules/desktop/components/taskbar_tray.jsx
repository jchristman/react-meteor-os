import React from 'react';
import Clock from 'react-clock';

const TaskbarTray = (props) => {
    return (
        <div className={stylesheet.default}>
            <Clock/>
        </div>
    );
}

const stylesheet = cssInJS({
    default: {
        width: '100%',
        height: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TaskbarTray;
