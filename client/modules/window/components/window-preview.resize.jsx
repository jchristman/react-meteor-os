import React from 'react';
import WindowPreviewOutline from './window-preview.outline.jsx';
import getResizePosition from '../lib/getResizePosition.js';

const WindowResizePreview = (props) => {
    const position = getResizePosition(props.which, props.x, props.y, props.position);
    return (
        <WindowPreviewOutline
            position={position}
            zIndex={props.zIndex}
        />
    );
}

export default WindowResizePreview;
