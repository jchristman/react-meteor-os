import {composeAll} from 'react-komposer';
import ContextMenu from 'react-context-menus';
import FontAwesome from 'react-fontawesome';
import {DropTarget} from 'react-dnd';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import WindowLayoutLeaf from '../components/window_layout_leaf.jsx';

import {dividerType} from '../configs/drag_types.js';
import * as Constants from '../../../configs/constants';

const items = (props) => {
    const types = Object.keys(_.omit(Constants.LeafTypes, (val) => val === props.leaf_type));
    return [
        {
            label: ( <span><FontAwesome name='arrows-v'/>&nbsp;&nbsp;Split Vertical</span> ),
            onClick: () => props.actions.splitPaneVertical(props.path)
        },
        {
            label: ( <span><FontAwesome name='arrows-h'/>&nbsp;&nbsp;Split Horizontal</span> ),
            onClick: () => props.actions.splitPaneHorizontal(props.path)
        },
        '-',
        {
            label: ( <span>Change Type</span> ),
            items: types.map((type) => {
                return {
                    label: type,
                    onClick: () => props.actions.changeLeafType(props.path, Constants.LeafTypes[type])
                };
            })
        }
    ];
}

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

export default composeAll(
    ContextMenu(items),
    DropTarget(type, spec, collect)
)(WindowLayoutLeaf);
