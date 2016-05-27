import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {ReactiveVar} from 'meteor/reactive-var';

import Code from '../components/code.jsx';

const composer = (context, onData) => {
    const {LocalState, CurrentApp, copyModal } = context;

    // Get the JSON Code
    let code = LocalState.get(CurrentApp);
    if (typeof code === 'object') code = JSON.stringify(code, undefined, 4);

    // Get a reactive variable that says whether the modal is open or closed
    let is_copy_modal_open = copyModal.get();
    
    onData(null, { code, is_copy_modal_open });
}

// Set up the variables to use in the reactive composer function
const depsMapper = (context) => {
    let copyModal = new ReactiveVar(false);
    let copyModalOpen = () => copyModal.set(true);
    let copyModalClose = () => copyModal.set(false);
    return {
        copyModal, copyModalOpen, copyModalClose, ...context
    };
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Code);
