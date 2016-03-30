import {DropTarget} from 'react-dnd';
import WindowLayer from '../components/window-layer.jsx';
import {WindowType} from '../../window/lib/drag-types.js';

const layerTarget = {
    drop: (props) => {
        console.log(props);
        props.actions.update(props);
        return {};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

export default DropTarget(WindowType, layerTarget, collect)(WindowLayer);
