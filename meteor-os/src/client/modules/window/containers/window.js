import {composeAll, composeWithTracker} from 'react-komposer';
import {DragSource} from 'react-dnd';

import Window from '../components/window.jsx';

import {windowPositionType, windowResizerType} from '../configs/drag_types.js';
import windowHandles from '../lib/window_handles.js';

const layerType = (props) => props.layer_id;

// This is a function that will return a DragSource specification based on a passed in handle
const dragSourceSpec = (handle) => {
    return {
        beginDrag: (props) => {
            return {...props, which: handle, dragType: handle === 'titlebar' ? windowPositionType : windowResizerType };
        }
    }
}

// This a function that will return a collect function based on a passed in handle
const collect = (handle) => {
    return (connect, monitor) => {
        const spec = {}

        spec[handle + 'connectDragSource'] = connect.dragSource();
        spec[handle + 'connectDragPreview'] = connect.dragPreview();
        spec[handle + 'isDragging'] = monitor.isDragging();

        return spec;
    }
}

const composer = (props, onData) => {
    onData(null, {});
}

// Now we need to wrap the window in 9 different drag sources.
// The first is the window title bar handle.
// The other 8 are the directional resizing handles.
const dragSourceContainers = Array.from(windowHandles, handle => DragSource(layerType, dragSourceSpec(handle), collect(handle)))

export default composeAll(
    composeWithTracker(composer),
    ...dragSourceContainers
)(Window);
