import React from 'react';

const Canvas = (props) => {
    return (
        <div className={stylesheet.canvas}>

        </div>
    );
}

const stylesheet = cssInJS({
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        backgroundColor: '#EEEEEE'
    }
});

export default Canvas;
