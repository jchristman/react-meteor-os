import {composeAll, composeWithTracker} from 'react-komposer';
import {DropTarget} from 'react-dnd';
import WindowLayer from '../components/window-layer.jsx';
import {Meteor} from 'meteor/meteor';

import layerHiddenStateVar from '../lib/layerHiddenStateVar.js';
import windowResizing from '../../window/lib/windowResizing.js';
import updateWindowPosition from '../lib/updateWindowPosition.js';
import * as dragTypes from '../../window/configs/dragTypes.js';
import getResizePosition from '../../window/lib/getResizePosition.js';

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
            position = {};
        switch(item.dragType) {
            case dragTypes.windowPositionType:
                delta = monitor.getDifferenceFromInitialOffset();
                left = Math.round(item.position.left + delta.x);
                top = Math.round(item.position.top + delta.y);
                width = item.position.width;
                height = item.position.height;

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
