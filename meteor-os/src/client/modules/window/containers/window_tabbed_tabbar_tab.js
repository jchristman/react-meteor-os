import {DragSource} from 'react-dnd';

import WindowTabbedTabbarTab from '../components/window_tabbed_tabbar_tab.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const layerType = (props) => props.layer_id + '_tab';

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

export default DragSource(layerType, dragSourceSpec, dragCollect)(WindowTabbedTabbarTab);
