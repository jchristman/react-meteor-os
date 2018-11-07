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
            let oldPath = item.path.substr(0, item.path.lastIndexOf('.'));
            let newPath = props.path;
            let _newPath = undefined,
                _oldPath = undefined;
            switch (area) {
                case 'Middle':
                    props.actions.moveTab(oldPath, item.index, newPath);
                    break;
                case 'Left':
                    _newPath = newPath.substr(0, newPath.lastIndexOf('.content'));
                    _oldPath = oldPath.substr(0, oldPath.lastIndexOf('.content'));
                    if (oldPath === newPath)    _oldPath += '.panes.pane2.content';
                    else                        _oldPath += '.content';
                    props.actions.splitPaneHorizontal(_newPath, true);
                    props.actions.moveTab(_oldPath, item.index, _newPath + '.panes.pane1.content');
                    break;
                case 'Right':
                    _newPath = newPath.substr(0, newPath.lastIndexOf('.content'));
                    _oldPath = oldPath.substr(0, oldPath.lastIndexOf('.content'));
                    if (oldPath === newPath)    _oldPath += '.panes.pane1.content';
                    else                        _oldPath += '.content';
                    props.actions.splitPaneHorizontal(_newPath);
                    props.actions.moveTab(_oldPath, item.index, _newPath + '.panes.pane2.content');
                    break;
                case 'Bottom':
                    _newPath = newPath.substr(0, newPath.lastIndexOf('.content'));
                    _oldPath = oldPath.substr(0, oldPath.lastIndexOf('.content'));
                    if (oldPath === newPath)    _oldPath += '.panes.pane1.content';
                    else                        _oldPath += '.content';
                    props.actions.splitPaneVertical(_newPath);
                    props.actions.moveTab(_oldPath, item.index, _newPath + '.panes.pane2.content');
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
