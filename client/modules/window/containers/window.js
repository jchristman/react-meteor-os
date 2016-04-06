import {composeAll, composeWithTracker} from 'react-komposer';
import {DragSource} from 'react-dnd';
import Window from '../components/window.jsx';
import {windowType} from '../configs/dragTypes.js';

const layerType = (props) => props.parent_id;

const dragSourceSpec = {
    beginDrag: (props) => {
        return {...props, dragType: windowType};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

const composer = (props, onData) => {
    onData(null, {});
}

export default composeAll(
    composeWithTracker(composer),
    DragSource(layerType, dragSourceSpec, collect)
)(Window);
