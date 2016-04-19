import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

const style = (props) => {
    let top = undefined,
        left = undefined,
        right = undefined,
        bottom = undefined,
        width = 'auto',
        height = 'auto',
        cursor = 'default';
    switch(props.which) {
        case 'nw':
            top = -2; left = -2; width = 6; height = 6; cursor = 'nesw-resize';
            break;
        case 'n':
            top = -2; left = 6; right = 6; height = 6; cursor = 'ns-resize';
            break;
        case 'ne':
            top = -2; right = -2; width = 6; height = 6; cursor = 'nwse-resize';
            break;
        case 'e':
            top = 6; bottom = 6; right = -2; width = 6; cursor = 'ew-resize';
            break;
        case 'se':
            bottom = -2; right = -2; width = 6; height = 6; cursor = 'nwse-resize';
            break;
        case 's':
            bottom = -2; left = 6; right = 6; height = 6; cursor = 'ns-resize';
            break;
        case 'sw':
            bottom = -2; left = -2; width = 6; height = 6; cursor = 'nesw-resize';
            break;
        case 'w':
            top = 6; bottom = 6; left = -2; width = 6; cursor = 'ew-resize';
            break;
    }

    return {
        position: 'absolute',
        top,
        bottom,
        left,
        right,
        width,
        height,
        cursor
    }
}

class WindowResizer extends React.Component {
    render() {
        return this.props.connectDragSource(
            <div style={style(this.props)}></div>
        );
    }
};

export default WindowResizer;
