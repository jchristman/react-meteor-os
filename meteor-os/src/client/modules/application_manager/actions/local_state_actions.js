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

const changePosition = (context, path, top, left, width, height) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    set_node(path, current, { top, left, width, height });

    LocalState.set(stateVar, current);
}

const grabFocus = (context, layerIndex, windowIndex) => {
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

const splitPaneVertical = (context, path) => splitPane(context, path, 'vertical');
const splitPaneHorizontal = (context, path) => splitPane(context, path, 'horizontal');

const splitPane = (context, path, orientation) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let layoutNode = get_node(path, current);
    let _content = layoutNode.content;
    let _leaf_type = layoutNode.leaf_type;
    delete layoutNode.content;
    delete layoutNode.leaf_type;

    layoutNode.panes = {
        orientation,
        percentage: 50,
        pane1: {
            content: _content,
            leaf_type: _leaf_type
        },
        pane2: {
            content: [
                {
                    data: baconipsum(100),
                    type: Constants.ContentTypes.Text,
                    label: 'Tab 1'
                }
            ],
            leaf_type: Constants.LeafTypes.Tabbed
        }
    }
    LocalState.set(stateVar, current);
}

const movePaneDivider = (context, path, percentage) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let layoutNode = get_node(path, current);
    layoutNode.panes.percentage = percentage;

    LocalState.set(stateVar, current);
}

const changeLeafType = (context, path, type) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let layoutNode = get_node(path, current);
    layoutNode.leaf_type = type;

    LocalState.set(stateVar, current);
}

// Expecting oldPath and newPath to point to content arrays, oldIndex required, newIndex optional (insert at end)
const moveTab = (context, oldPath, oldIndex, newPath, newIndex) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    if (oldPath === newPath && newIndex === undefined) {
        console.log('Moving in same window does nothing');
        return;
    }

    let oldContentNode = get_node(oldPath, current);
    let newContentNode = get_node(newPath, current);
    // If newIndex is not defined, set it to the end of the newContentNode array
    newIndex = newIndex || newContentNode.length;
    let tab = oldContentNode.splice(oldIndex, 1)[0];
    newContentNode.splice(newIndex, 0, tab);
    
    LocalState.set(stateVar, current);
}

export default { 
    changePosition,
    grabFocus,
    splitPaneVertical,
    splitPaneHorizontal,
    movePaneDivider,
    changeLeafType,
    moveTab
};
