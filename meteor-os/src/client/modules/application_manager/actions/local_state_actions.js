import baconipsum from 'baconipsum';

import local_state_var from '../configs/local_state_var.js';
import * as Constants from '../../../configs/constants';

const get_node = (path, obj) => {
    if (typeof path === 'string') path = path.split('.');
    return path.reduce((o,i)=>o[i], obj);
}

const set_node = (path, obj, val) => {
    path = path.split('.');
    get_node(path.slice(0,-1), obj)[path.slice(-1)] = val;
};

const updateWindowPosition = (context, path, top, left, width, height) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    set_node(path, current, { top, left, width, height });

    LocalState.set(stateVar, current);
}

const updateWindowGrabFocus = (context, layerIndex, windowIndex) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let path = layerIndex + '.windows';
    let windows = get_node(path, current);
    let _window = windows.splice(windowIndex, 1)[0];
    windows.push(_window);

    let app = current.splice(layerIndex, 1)[0];
    current.push(app);

    LocalState.set(stateVar, current);
}

const updateWindowSplitPaneVertical = (context, layerIndex, windowIndex, path) => updateWindowSplitPane(context, layerIndex, windowIndex, path, 'vertical');
const updateWindowSplitPaneHorizontal = (context, layerIndex, windowIndex, path) => updateWindowSplitPane(context, layerIndex, windowIndex, path, 'horizontal');

const updateWindowSplitPane = (context, layerIndex, windowIndex, path, orientation) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    if (path === undefined) path = 'layout';
    path = layerIndex + '.windows.' + windowIndex + '.' + path;

    let layoutNode = get_node(path, current);
    let _content = layoutNode.content;
    let _content_type = layoutNode.content_type;
    let _leaf_type = layoutNode.leaf_type;
    delete layoutNode.content;
    delete layoutNode.content_type;
    delete layoutNode.leaf_type;

    layoutNode.panes = {
        orientation,
        percentage: 50,
        pane1: {
            _id: Random.id(),
            content: _content,
            content_type: _content_type,
            leaf_type: _leaf_type
        },
        pane2: {
            _id: Random.id(),
            content: baconipsum(100),
            content_type: Constants.ContentTypes.Text,
            leaf_type: Constants.LeafTypes.Plain
        }
    }
    LocalState.set(stateVar, current);
}

const updateWindowMoveDivider = (context, layerIndex, windowIndex, path, percentage) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    if (path === undefined) path = 'layout';
    path = layerIndex + '.windows.' + windowIndex + '.' + path;

    let layoutNode = get_node(path, current);
    layoutNode.panes.percentage = percentage;

    LocalState.set(stateVar, current);
}

export default { 
    updateWindowPosition,
    updateWindowGrabFocus,
    updateWindowSplitPaneVertical,
    updateWindowSplitPaneHorizontal,
    updateWindowMoveDivider
};
