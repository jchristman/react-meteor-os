import {DropTarget} from 'react-dnd';

import WindowContentTabbedContent from '../components/window_content_tabbed_tabcontent.jsx';

// Only allow things to be dropped in this window if they are from the same layer
const layerType = (props) => props.layer_id;

const layerTarget = {
    drop: (props, monitor) => {
        const item = monitor.getItem();
        console.log(item);
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

export default DropTarget(layerType, layerTarget, collect)(WindowContentTabbedContent);
