import {DragSource} from 'react-dnd';
import WindowResizer from '../components/window-resizer.jsx';
import {windowResizerType} from '../configs/dragTypes.js';
import windowResizing from '../lib/windowResizing.js';

const layerType = (props) => props.parent_id;

const dragSourceSpec = {
    beginDrag(props) {
        props.LocalState.set(windowResizing(props.parent_id), true);
        return {...props, dragType: windowResizerType};
    },

    endDrag(props) {
        props.LocalState.set(windowResizing(props.parent_id), false);
        return {...props, dragType: windowResizerType};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

export default DragSource(layerType, dragSourceSpec, collect)(WindowResizer);
