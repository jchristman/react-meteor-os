import React from 'react';

import WindowLayer from '../containers/window_layer.js';
import CustomDragLayer from '../containers/custom_drag_layer.js';

const WindowManager = (props) => (
    <div>
        <WindowLayer {...props}/>
        <CustomDragLayer {...props}/>
    </div>
);

export default WindowManager;
