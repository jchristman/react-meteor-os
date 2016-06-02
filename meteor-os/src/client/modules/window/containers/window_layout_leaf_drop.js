import {DropTarget} from 'react-dnd';
import WindowLayoutLeaf from '../components/window_layout_leaf.jsx';

import {dividerType} from '../configs/drag_types.js';

const type = () => dividerType;

const spec = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const pointer = monitor.getClientOffset();
        const parent = item.parent.getBoundingClientRect();
        
        const path = item.path !== undefined ? item.path : 'layout';
        const panes = item.panes !== undefined ? item.panes : item.layout.panes;

        if (props.path.indexOf(path) > -1) {
            const percentage = panes.orientation === 'horizontal' ?
                (pointer.x - parent.left) / (parent.right - parent.left) * 100 :
                (pointer.y - parent.top) / (parent.bottom - parent.top) * 100;

            props.actions.movePaneDivider(path, percentage);
        }
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

export default DropTarget(type, spec, collect)(WindowLayoutLeaf);
