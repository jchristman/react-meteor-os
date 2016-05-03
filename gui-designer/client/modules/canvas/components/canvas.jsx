import React from 'react';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 300,
        bottom: 300,

        backgroundColor: '#DDDDDD'
    }
});

const Canvas = (props) => {
    return (
        <div className={stylesheet.default}>
            Canvas
        </div>
    );
}

export default Canvas;
