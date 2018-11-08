import React from 'react';
import jss from 'react-jss';
import ApplicationManager from '../containers/gui_designer_application_manager_interface.js';

const stylesheet = {
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 300,
        bottom: 300,

        backgroundColor: '#DDDDDD'
    }
};

const Canvas = (props) => {
    return (
        <div className={props.classes.default}>
            <ApplicationManager {...props}/>
        </div>
    );
}

export default jss(stylesheet)(Canvas);
