import React from 'react';

import WindowPreview from './window.jsx';

import getResizePosition from '../lib/get_resize_position.js';

const WindowResizePreview = (props) => {
    let x = props.x, y = props.y;
    if (x === undefined) x = props.position.left;
    if (y === undefined) y = props.position.top;
    const position = getResizePosition(props.which, x, y, props.position);
    const passOn = _.pick(props, ['_id', 'parent_id', 'LocalState', 
                          'focused', 'title', 'zIndex', 'content']);
    return (
        <WindowPreview
            {...passOn}
            position={position}
            isPreview={true}
        />
    );
}

export default WindowResizePreview;
