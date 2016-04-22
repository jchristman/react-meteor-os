import React from 'react';
import { DragLayer } from 'react-dnd';

import WindowPositionPreview from '../../window/components/window_preview_position.jsx';
import WindowResizePreview from '../../window/components/window_preview_resize.jsx';
import * as dragTypes from '../../window/configs/drag_types.js';

const stylesheet = cssInJS({
    default: {
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 999999,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    }
});

class CustomDragLayer extends React.Component {
    renderItem() {
        const {item, currentOffset, currentPointer} = this.props;
        switch (item.dragType) {
            case dragTypes.windowPositionType:
                return ( <WindowPositionPreview {...item} {...currentOffset} pointer={currentPointer}/> );
            case dragTypes.windowResizerType:
                return ( <WindowResizePreview {...item} {...currentOffset}/> );
            default:
                return null;
        }

    }

    render() {
        if (!this.props.isDragging || this.props.itemType !== this.props._id) return null;

        return (
            <div className={stylesheet.default}>
                {this.renderItem()}
            </div>
        );
    }
}

export default CustomDragLayer;
