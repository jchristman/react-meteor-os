import {DragSource} from 'react-dnd';

import WindowContentLayoutDivider from '../components/window_content_layout_divider.jsx';

import {dividerType} from '../configs/drag_types.js';

const type = () => dividerType;

const spec = {
    beginDrag(props) {
        return {...props};
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

export default DragSource(type, spec, collect)(WindowContentLayoutDivider);
