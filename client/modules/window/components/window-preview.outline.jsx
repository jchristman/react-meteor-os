import React from 'react';

const getStyle = (props) => {
    return {
        position: 'absolute',
        ...props.position,
        zIndex: props.zIndex,
        border: 3,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 4
    };
}

const WindowPreviewOutline = (props) => (
    <div style={getStyle(props)}>
    </div>
);

export default WindowPreviewOutline;
