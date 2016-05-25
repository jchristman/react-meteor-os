import {composeAll} from 'react-komposer';
import ContextMenu from 'react-context-menus';
import FontAwesome from 'react-fontawesome';
import {DropTarget} from 'react-dnd';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import WindowContentLayoutLeaf from '../components/window_content_layout_leaf.jsx';

import {dividerType} from '../configs/drag_types.js';
import * as Constants from '../../../configs/constants';

const items = (props) => {
    const types = Object.keys(_.omit(Constants.LeafTypes, (val) => val === props.leaf_type));
    return [
        {
            label: ( <span><FontAwesome name='arrows-v'/>&nbsp;&nbsp;Split Vertical</span> ),
            onClick: (event, props) => props.splitV(props.path)
        },
        {
            label: ( <span><FontAwesome name='arrows-h'/>&nbsp;&nbsp;Split Horizontal</span> ),
            onClick: (event, props) => props.splitH(props.path)
        },
        '-',
        {
            label: ( <span>Change Type</span> ),
            items: types.map((type) => {
                return {
                    label: type,
                    onClick: (event, props) => alert(type)
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
