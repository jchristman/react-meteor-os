import {DragSource} from 'react-dnd';
import Window from '../components/window.jsx';

const layerType = (props) => props.parent_id;

const dragSourceSpec = {
    beginDrag: (props) => {
        return {
            _id: props._id,
            index: props.index,
            top: props.position.top,
            left: props.position.left
        };
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

export default DragSource(layerType, dragSourceSpec, collect)(Window);
