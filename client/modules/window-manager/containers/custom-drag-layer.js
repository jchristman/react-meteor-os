import {DragLayer} from 'react-dnd';
import CustomDragLayer from '../components/custom-drag-layer.jsx';

const collect = (monitor) => {
    return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    }
}

export default DragLayer(collect)(CustomDragLayer);
