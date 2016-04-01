import {composeAll, composeWithTracker} from 'react-komposer';
import {DropTarget} from 'react-dnd';
import WindowLayer from '../components/window-layer.jsx';
import {Meteor} from 'meteor/meteor';

import layerHiddenStateVar from '../lib/layerHiddenStateVar.js';
import updateWindowPosition from '../lib/updateWindowPosition.js';

// Only allow things to be dropped in this layer that are of type: props._id
const layerType = (props) => props._id;

const layerTarget = {
    drop: (props, monitor) => {
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        updateWindowPosition(props, item, top, left);
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
    LocalState.setDefault(layerHiddenStateVar(context._id, false));

    onData(null, {});
}

export default composeAll(
    composeWithTracker(composer),
    DropTarget(layerType, layerTarget, collect)
)(WindowLayer);
