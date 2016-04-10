import React from 'react';
import WindowPreviewOutline from './window-preview.outline.jsx';
import getResizePosition from '../lib/getResizePosition.js';

const WindowResizePreview = (props) => {
    let x = props.x, y = props.y;
    if (x === undefined) x = props.position.left;
    if (y === undefined) y = props.position.top;
    const position = getResizePosition(props.which, x, y, props.position);
    return (
        <WindowPreviewOutline
            position={position}
            zIndex={props.zIndex}
        />
    );
}

export default WindowResizePreview;
