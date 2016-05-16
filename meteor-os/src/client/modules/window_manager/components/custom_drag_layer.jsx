import React from 'react';
import { DragLayer } from 'react-dnd';

import WindowPositionPreview from '../../window/components/window_preview_position.jsx';
import WindowResizePreview from '../../window/components/window_preview_resize.jsx';
import LayoutPreview from '../../window/components/window_content_layout_preview.jsx';
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
            case dragTypes.dividerType:
                return ( <LayoutPreview {...item} {...currentOffset} pointer={currentPointer}/> );
            default:
                return null;
        }

    }

    render() {
        if (!this.props.isDragging || this.props.item.dragType === undefined) return null;

        return (
            <div className={stylesheet.default}>
                {this.renderItem()}
            </div>
        );
    }
}

export default CustomDragLayer;
