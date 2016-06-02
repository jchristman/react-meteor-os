import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import WindowTabbedTabbarTab from './window_tabbed_tabbar_tab_drag.js';

const getEditingKey = (props) => props.path + '_editing';
const getLabelKey = (props) => props.path + '_label';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    LocalState.setDefault(getEditingKey(props), false);

    const setLabel = (event) => {
        props.actions.changeTabLabel(props.path, event.target.value);
    } 
    const is_editing = LocalState.get(getEditingKey(props));
    const setEditing = (val) => LocalState.set(getEditingKey(props), val);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
            props.actions.changeTabLabel(props.path, event.target.value);
        }
    }

    onData(null, { is_editing, setEditing, setLabel, handleKeyPress });
}

const depsMapper = (context) => {
    return {
        context: () => context
    };
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(WindowTabbedTabbarTab);
