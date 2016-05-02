import {DragSource} from 'react-dnd';

import WindowContentTabbedTabbarTab from '../components/window_content_tabbed_tabbar_tab.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const layerType = (props) => props.layer_id;

const dragSourceSpec = {
    beginDrag: (props) => {
        return {...props, dragType: tabMoveType};
    }
}

const dragCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
});

export default DragSource(layerType, dragSourceSpec, dragCollect)(WindowContentTabbedTabbarTab);
