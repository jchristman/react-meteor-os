import React from 'react';

import WindowLayer from '../containers/window_layer.js';
import CustomDragLayer from '../containers/custom_drag_layer.js';

// Each Window Manager needs to define its windows in a layer and define a custom
// drag layer to render windows in when being dragged
const WindowManager = (props) => (
    <div>
        <WindowLayer {...props}/>
        <CustomDragLayer {...props}/>
    </div>
);

export default WindowManager;
