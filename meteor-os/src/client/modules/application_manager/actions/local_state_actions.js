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
    switch(type) {
        case Constants.LeafTypes.Tabbed:
            // If we are switching to a tabbed type, content needs to be an array
            layoutNode._id = [ layoutNode._id ];
            layoutNode.content = [ layoutNode.content ];
            layoutNode.content_type = [ layoutNode.content_type ];
            layoutNode.label = [ 'Tab 1' ];
            break;
        case Constants.LeafTypes.Plain:
            // If we are switching to a plain type, content needs to be a string (component name or actual data)
            layoutNode._id = layoutNode._id[0];
            layoutNode.content = layoutNode.content[0];
            layoutNode.content_type = layoutNode.content_type[0];
            delete layoutNode.label;
            break;
        default:
            console.log('Unknown leaf type!');
            return;
    }
    layoutNode.leaf_type = type;

    LocalState.set(stateVar, current);
}

export default { 
    changePosition,
    grabFocus,
    splitPaneVertical,
    splitPaneHorizontal,
    movePaneDivider,
    changeLeafType
};
