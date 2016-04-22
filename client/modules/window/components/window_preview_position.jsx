import React from 'react';
import WindowPreview from './window.jsx';

const WindowPositionPreview = (props) => {
    const passOn = _.omit(props, 'position');
    return (
        <WindowPreview
            {...passOn}
            position={{
                top: props.y,
                left: props.x,
                width: props.position.width,
                height: props.position.height
            }}
            isPreview={true}
        />
    );
}

export default WindowPositionPreview;
