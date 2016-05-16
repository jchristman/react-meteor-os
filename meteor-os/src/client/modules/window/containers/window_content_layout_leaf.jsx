import {composeAll} from 'react-komposer';
import ContextMenu from '../../context_menu/context_menu.jsx';
import FontAwesome from 'react-fontawesome';
import {DropTarget} from 'react-dnd';
import ReactDOM from 'react-dom';

import WindowContentLayoutLeaf from '../components/window_content_layout_leaf.jsx';

import {dividerType} from '../configs/drag_types.js';

const items = [
    {
        label: ( <span><FontAwesome name='arrows-v'/>&nbsp;&nbsp;Split Vertical</span> ),
        onClick: (event, props, index) => { props.splitV(props.path) }
    },
    {
        label: ( <span><FontAwesome name='arrows-h'/>&nbsp;&nbsp;Split Horizontal</span> ),
        onClick: (event, props, index) => props.splitH(props.path)
    }
]

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

            props.moveDivider(path, percentage);
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

export default composeAll(
    ContextMenu(items),
    DropTarget(type, spec, collect)
)(WindowContentLayoutLeaf);
