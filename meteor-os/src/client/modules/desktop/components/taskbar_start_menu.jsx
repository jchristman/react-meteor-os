import React from 'react';

const TaskbarStartMenu = (props) => {
    return (
        <div className={stylesheet.default}>
            Test
        </div>
    );
}

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        bottom: '100%',
        left: 0,
        width: 300,
        height: 400,

        backgroundColor: '#EEEEEE',
        color: '#111111'
    }
});

export default TaskbarStartMenu;
