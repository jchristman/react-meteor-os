import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {ReactiveVar} from 'meteor/reactive-var';
import PartLabel from '../components/part_label.jsx';
import get_node from '../lib/get_node.js';

const composer = (context, onData) => {
    const props = context;
    const {LocalState, CurrentApp} = context.context();
    const prep = (key, val) => {
        const _key = `_gui_designer_edit_value_${key}`;
        LocalState.setDefault(_key, val);
        return _key;
    }

    const editValueModal = prep(props.path, false);
    const editValueModalX = prep(`${props.path}_X`, 0);
    const editValueModalY = prep(`${props.path}_Y`, 0);
    
    const click = (x, y) => {
        LocalState.set(editValueModalX, x);
        LocalState.set(editValueModalY, y);
    }
    const editValueModalOpen = () => LocalState.set(editValueModal, true);
    const editValueModalClose = () => LocalState.set(editValueModal, false);
    
    const is_edit_value_modal_open = LocalState.get(editValueModal);
    const click_x = LocalState.get(editValueModalX);
    const click_y = LocalState.get(editValueModalY);
    const value = get_node(props.path, LocalState.get(CurrentApp));

    onData(null, { is_edit_value_modal_open, click_x, click_y, click, editValueModalOpen, editValueModalClose, value });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(PartLabel);
