import baconipsum from 'baconipsum';
import _ from 'underscore';

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

const splitPaneVertical = (context, path, _switch) => splitPane(context, path, _switch, 'vertical');
const splitPaneHorizontal = (context, path, _switch) => splitPane(context, path, _switch, 'horizontal');

const splitPane = (context, path, _switch, orientation) => {
    if (_switch === undefined) _switch = false;
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let layoutNode = get_node(path, current);
    let _content = layoutNode.content;
    let _leaf_type = layoutNode.leaf_type;
    delete layoutNode.content;
    delete layoutNode.leaf_type;
        
    const pane1 = {
        content: _content,
        leaf_type: _leaf_type
    };
    const pane2 = {
        content: [],
        leaf_type: Constants.LeafTypes.Tabbed
    };

    layoutNode.panes = {
        orientation,
        percentage: 50
    };

    if (_switch) {
        layoutNode.panes.pane1 = pane2;
        layoutNode.panes.pane2 = pane1;
    } else {
        layoutNode.panes.pane1 = pane1;
        layoutNode.panes.pane2 = pane2;
    }

    LocalState.set(stateVar, current);
}

const closeLeaf = (context, path) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    // Here is where we are promoting to
    let layoutNode = get_node(path.substr(0, path.lastIndexOf('.panes')), current); 

    if (path.endsWith('.content')) path = path.substr(0, path.lastIndexOf('.'));
    const paneToPromote = path.substr(0, path.length - 1) + (path.substr(-1) === '1' ? '2' : '1');
    const paneToPromoteNode = get_node(paneToPromote, current);
    
    _.extend(layoutNode, paneToPromoteNode);
    
    if (layoutNode === undefined) {
        // TODO: Maybe close the window here?
    } else if (layoutNode.content !== undefined && layoutNode.panes !== undefined) {
        delete layoutNode.panes;
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
    closeAllTabsBut(context, path + '.content.0');
}

// Expecting oldPath and newPath to point to content arrays, oldIndex required, newIndex optional (insert at end)
const moveTab = (context, oldPath, oldIndex, newPath, newIndex, noClose = false) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    if (oldPath === newPath && newIndex === undefined) {
        return;
    }

    let oldContentNode = get_node(oldPath, current);
    let newContentNode = get_node(newPath, current);
    // If newIndex is not defined, set it to the end of the newContentNode array
    newIndex = newIndex || newContentNode.length;
    let tab = oldContentNode.splice(oldIndex, 1)[0];
    newContentNode.splice(newIndex, 0, tab);
    
    // Finish moving the tab
    LocalState.set(stateVar, current);

    // Close the old tab if there are no tabs left in the leaf
    if (oldContentNode.length === 0 && !noClose) {
        closeLeaf(context, oldPath);
    }
}

const changeTabLabel = (context, path, label) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    let layoutNode = get_node(path, current);
    layoutNode.label = label;

    LocalState.set(stateVar, current);
}

const closeAllTabsBut = (context, path) => {
    const {LocalState} = context;
    const stateVar = LocalState.get(local_state_var);
    const current = LocalState.get(stateVar);

    const stayOpen = parseInt(path.split('.').slice(-1));
    const tabArrayPath = path.substr(0, path.lastIndexOf('.'));
    const tabArray = get_node(tabArrayPath, current);

    // We count down so that we are not modifying indices of things to move
    for (let i = tabArray.length - 1; i >= 0; i--) {
        if (i !== stayOpen) {
            closeTab(context, tabArrayPath + '.' + i);
        }
    }
}

const closeAllTabs = (context, path) => {
    closeAllTabsBut(context, path.substr(0, path.lastIndexOf('.')) + '.-1');
}

const closeTab = (context, path) => {
    // We want to get to X.unassigned_content, which is all of the content not assigned to a leaf node for the application
    const oldPath = path.substr(0, path.lastIndexOf('.'));
    const oldIndex = parseInt(path.split('.').slice(-1));
    const newPath = path.split('.')[0] + '.unassigned_content';
    moveTab(context, oldPath, oldIndex, newPath);
}

const openTab = (context, path, index) => {
    const oldPath = path.split('.')[0] + '.unassigned_content';
    const oldIndex = index;
    const newPath = path;
    moveTab(context, oldPath, oldIndex, newPath, undefined, true);
}

export default { 
    changePosition,
    grabFocus,
    splitPaneVertical,
    splitPaneHorizontal,
    closeLeaf,
    movePaneDivider,
    changeLeafType,
    moveTab,
    changeTabLabel,
    closeAllTabsBut,
    closeAllTabs,
    closeTab,
    openTab
};
