import {composeWithTracker} from 'react-komposer';

import PartLabel from '../components/part_label.jsx';

import get_node from '../lib/get_node.js';

const composer = (props, onData) => {
    const {LocalState, CurrentApp, path} = props;

    const EditValueModal = '_gui_designer_edit_value_modal_' + path;
    const EditValueModalX = '_gui_designer_edit_value_modal_' + path + 'X';
    const EditValueModalY = '_gui_designer_edit_value_modal_' + path + 'Y';
    LocalState.setDefault(EditValueModal, false);
    LocalState.setDefault(EditValueModalX, 0);
    LocalState.setDefault(EditValueModalY, 0);

    const editValueModalIsOpen = LocalState.get(EditValueModal);
    const clickX = LocalState.get(EditValueModalX);
    const clickY = LocalState.get(EditValueModalY);
    const value = get_node(props.path, LocalState.get(CurrentApp));

    onData(null, { editValueModalIsOpen, EditValueModal, EditValueModalX, EditValueModalY, clickX, clickY, value });
}

export default composeWithTracker(composer)(PartLabel);
