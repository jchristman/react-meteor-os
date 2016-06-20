import React from 'react';

import Canvas from '../containers/canvas.js';
import Taskbar from '../containers/taskbar.js';

const Desktop = (props) => {
    return (
        <div className={stylesheet.default}>
            <Canvas
                {...props}
            />
            <Taskbar
                {...props}
            />
        </div>
    );
}

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

export default Desktop;
