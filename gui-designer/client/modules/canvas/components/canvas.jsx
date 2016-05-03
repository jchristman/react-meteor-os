import React from 'react';
import ApplicationManager from '../containers/gui_designer_application_manager_interface.js';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 300,
        bottom: 300,

        backgroundColor: '#DDDDDD'
    }
});

const Canvas = (props) => {
    return (
        <div className={stylesheet.default}>
            <ApplicationManager {...props}/>
        </div>
    );
}

export default Canvas;
