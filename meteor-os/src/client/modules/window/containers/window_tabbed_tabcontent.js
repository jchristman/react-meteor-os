import {useDeps, composeAll} from 'mantra-core';
import {DropTarget} from 'react-dnd';

import WindowTabbedTabcontent from '../components/window_tabbed_tabcontent.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const layerType = (props) => props.layer_id + '_tab';

// We are creating 4 of these
const dropTargetSpecContentArea = (area) => {
    return {
        drop: (props, monitor) => {
            const item = monitor.getItem();
            const oldPath = item.path.substr(0, item.path.lastIndexOf('.'));
            const newPath = props.path;
            switch (area) {
                case 'Middle':
                    props.actions.moveTab(oldPath, item.index, newPath);
                    break;
                case 'Left':
                    break;
                case 'Right':
                    break;
                case 'Bottom':
                    break;
                default:
                    console.log(`Unknown drop area: ${area}`);
                    break;
            }
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
    ...contentAreaDropTargets,
)(WindowTabbedTabcontent);
