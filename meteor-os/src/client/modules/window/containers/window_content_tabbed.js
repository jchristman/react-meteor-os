import {composeAll, composeWithTracker} from 'react-komposer';
import {DropTarget} from 'react-dnd';

import WindowContentTabbed from '../components/window_content_tabbed.jsx';

import getWindowTabCheckedKey from '../lib/get_window_tab_checked_key.js';
import {tabMoveType} from '../configs/drag_types.js';

const layerType = (props) => props.layer_id;

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
        collect['connectDropTargetContentArea' + area] = connect.dropTarget();
        collect['isOverContentArea' + area] = monitor.isOver();
        collect['canDropContentArea'] = monitor.canDrop(); // On purpose - we don't really care which one is "can drop". They are all the same
        
        return collect;
    }
}

const contentAreaDropTargets = Array.from(['Middle','Left','Right','Bottom'], 
                                          area => DropTarget(layerType, dropTargetSpecContentArea(area), dropCollectContentArea(area)));

const dropTargetSpecTabbar = {
    drop: (props, monitor) => {
        const item = monitor.getItem();
        console.log(item);
    }
}

const dropCollectTabbar = (connect, monitor) => {
    return {
        connectDropTargetTabbar: connect.dropTarget(),
        isOverTabbar: monitor.isOver(),
        cursorTabbar: monitor.getClientOffset(),
        canDropTabbar: monitor.canDrop()
    }
}

const composer = (props, onData) => {
    const {LocalState} = props;

    LocalState.setDefault(getWindowTabCheckedKey(props), 0);

    _.each(props.content, (tab) => { tab.checked = false }); 
    props.content[LocalState.get(getWindowTabCheckedKey(props))].checked = true;

    onData(null, { checked: LocalState.get(getWindowTabCheckedKey(props)) });
}

export default composeAll(
    ...contentAreaDropTargets,
    DropTarget(layerType, dropTargetSpecTabbar, dropCollectTabbar),
    composeWithTracker(composer)
)(WindowContentTabbed);
