import {composeAll} from 'mantra-core';
import {DragSource} from 'react-dnd';
import ContextMenu from 'react-context-menus';
import FontAwesome from 'react-fontawesome';

import WindowTabbedTabbarTab from '../components/window_tabbed_tabbar_tab.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const items = (props) => {
    return [
        {
            label: ( <span><FontAwesome name='edit'/>&nbsp;&nbsp;Rename</span> ),
            onClick: () => console.log('Rename')
        }
    ];
}

const options = {
    style: {
        zIndex: 2
    }
}
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

export default composeAll(
    DragSource(layerType, dragSourceSpec, dragCollect),
    ContextMenu(items, options)
)(WindowTabbedTabbarTab);
