import {composeAll} from 'mantra-core';
import {DropTarget} from 'react-dnd';

import WindowContent from '../components/window_content.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const layerType = (props) => props.layer_id + '_tab';

// We are creating 4 of these
const dropTargetSpecContentArea = (area) => {
    return {
        drop: (props, monitor) => {
            const item = monitor.getItem();
            console.log(item);
        }
    }
}

// We are creating 4 of these
const dropCollectContentArea = (area) => {
    return (connect, monitor) => {
        let collect = {};
        collect['connectDropTarget' + area] = connect.dropTarget();
        collect['isOver' + area] = monitor.isOver();
        collect['canDrop'] = monitor.canDrop(); // On purpose - we don't really care which one is "can drop". They are all the same
        
        return collect;
    }
}

const contentAreaDropTargets = Array.from(['Middle','Left','Right','Bottom'], 
                                          area => DropTarget(layerType, dropTargetSpecContentArea(area), dropCollectContentArea(area)));
export default composeAll(
    ...contentAreaDropTargets
)(WindowContent);
