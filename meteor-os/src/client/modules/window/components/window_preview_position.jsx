import React from 'react';
import WindowPreview from './window.jsx';

import snap from '../../window_manager/lib/snap.js';

const WindowPositionPreview = (props) => {
    const passOn = _.omit(props, 'position');
    
    return (
        <WindowPreview
            {...passOn}
            position={snap(props)}
            isPreview={true}
        />
    );
}

export default WindowPositionPreview;
