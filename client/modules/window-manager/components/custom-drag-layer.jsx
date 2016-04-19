import React from 'react';
import { DragLayer } from 'react-dnd';

import WindowPositionPreview from '../../window/components/window-preview.position.jsx';
import WindowResizePreview from '../../window/components/window-preview.resize.jsx';
import * as dragTypes from '../../window/configs/dragTypes.js';

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 999999,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

class CustomDragLayer extends React.Component {
    renderItem() {
        const {item, currentOffset} = this.props;
        switch (item.dragType) {
            case dragTypes.windowPositionType:
                return ( <WindowPositionPreview {...item} {...currentOffset}/> );
            case dragTypes.windowResizerType:
                return ( <WindowResizePreview {...item} {...currentOffset}/> );
            default:
                return null;
        }

    }

    render() {
        if (!this.props.isDragging || this.props.itemType !== this.props._id) return null;

        return (
            <div style={layerStyles}>
                {this.renderItem()}
            </div>
        );
    }
}

export default CustomDragLayer;
