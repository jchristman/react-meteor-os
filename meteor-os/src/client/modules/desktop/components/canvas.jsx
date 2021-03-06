import React from 'react';
import ApplicationManager from '../../application_manager/components/application_manager_wrapper.jsx';

// <ApplicationManager wrapper='state' stateVar={props.runningAppsStateVar}/>
const Canvas = (props) => {
    return (
        <div className={stylesheet.canvas}>
        </div>
    );
}

const stylesheet = cssInJS({
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        backgroundColor: '#EEEEEE'
    }
});

export default Canvas;
