import {DragLayer} from 'react-dnd';

import CustomDragLayer from '../components/custom_drag_layer.jsx';

const collect = (monitor) => {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        currentPointer: monitor.getClientOffset(),
        isDragging: monitor.isDragging()
    }
}

export default DragLayer(collect)(CustomDragLayer);
