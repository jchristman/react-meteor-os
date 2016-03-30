import {DragSource} from 'react-dnd';
import Window from '../components/window.jsx';
import {WindowType} from '../lib/drag-types.js';

const dragSourceSpec = {
    beginDrag: (props) => {
        return {};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

export default DragSource(WindowType, dragSourceSpec, collect)(Window);
