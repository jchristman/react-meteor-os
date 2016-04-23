import {composeAll, composeWithTracker} from 'react-komposer';
import {DragSource} from 'react-dnd';

import Window from '../components/window.jsx';

import {windowPositionType, windowResizerType} from '../configs/drag_types.js';
import windowHandles from '../lib/window_handles.js';

const tabType = (props) => props.parent_id;

const dragSourceSpec = {
    beginDrag: (props) => {
        return {...props};
    }
}

const collect = (connect, monitor) => {
    const spec = {}

    spec[handle + 'connectDragSource'] = connect.dragSource();
    spec[handle + 'connectDragPreview'] = connect.dragPreview();
    spec[handle + 'isDragging'] = monitor.isDragging();

    return spec;
}

const composer = (props, onData) => {
    onData(null, {});
}


export default composeAll(
    composeWithTracker(composer),
    DragSource(tabType, dragSourceSpec, collect)
)(Window);
