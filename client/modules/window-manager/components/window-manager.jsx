import React from 'react';
import WindowLayer from '../containers/window-layer.js';
import CustomDragLayer from '../containers/custom-drag-layer.js';

const WindowManager = (props) => (
    <div>
        <WindowLayer {...props}/>
        <CustomDragLayer {...props}/>
    </div>
);

export default WindowManager;
