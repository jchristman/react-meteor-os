import {composeAll, composeWithTracker} from 'react-komposer';
import {DropTarget} from 'react-dnd';
import {Meteor} from 'meteor/meteor';

import WindowLayer from '../components/window_layer.jsx';

import layerHiddenStateVar from '../lib/layer_hidden_state_var.js';
import windowResizing from '../../window/lib/window_resizing.js';
import updateWindowPosition from '../lib/update_window_position.js';
import * as dragTypes from '../../window/configs/drag_types.js';
import getResizePosition from '../../window/lib/get_resize_position.js';
import * as snap_limits from '../configs/snap_limits.js';
import snap from '../lib/snap.js';

// Only allow things to be dropped in this layer that are of type: props._id
const layerType = (props) => props._id;

const layerTarget = {
    drop: (props, monitor) => {
        const item = monitor.getItem();
        let delta = 0,
            left = 0,
            top = 0,
            width = 0,
            height = 0,
            x = 0,
            y = 0,
            position = {},
            pointer = {};
        switch(item.dragType) {
            case dragTypes.windowPositionType:
                pointer = monitor.getClientOffset();
                if (pointer.x <= snap_limits.limit || pointer.x >= window.innerWidth - snap_limits.limit) {
                    let tmp = { pointer, ...props, position: { width: 0, height: 0 } };
                    tmp = snap(tmp);
                    top = tmp.top;
                    left = tmp.left;
                    width = tmp.width;
                    height = tmp.height;
                } else {
                    delta = monitor.getDifferenceFromInitialOffset();
                    left = Math.round(item.position.left + delta.x) + 1;
                    top = Math.round(item.position.top + delta.y) + 1;
                    width = item.position.width;
                    height = item.position.height;
                }

                updateWindowPosition(props, item, top, left, width, height);
                break;
            case dragTypes.windowResizerType:
                delta = monitor.getDifferenceFromInitialOffset();
                if (item.which.indexOf('n') !== -1) y = item.position.top + delta.y;
                if (item.which.indexOf('w') !== -1) x = item.position.left + delta.x;
                if (item.which.indexOf('s') !== -1) y = item.position.top + item.position.height + delta.y;
                if (item.which.indexOf('e') !== -1) x = item.position.left + item.position.width + delta.x;
                position = getResizePosition(item.which,
                                             x,
                                             y,
                                             item.position);

                updateWindowPosition(props, item, position.top, position.left, position.width, position.height);
                break;
        }
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

const composer = (context, onData) => {
    const {LocalState} = context;
    LocalState.setDefault(layerHiddenStateVar(context._id, true));

    const layerHidden = LocalState.get(layerHiddenStateVar(context._id));
    onData(null, { layerHidden });
}

export default composeAll(
    composeWithTracker(composer),
    DropTarget(layerType, layerTarget, collect)
)(WindowLayer);
