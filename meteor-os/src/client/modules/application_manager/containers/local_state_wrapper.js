import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';

import ApplicationManager from './wrapper.js';

import local_state_var from '../configs/local_state_var.js';

const composer = (props, onData) => {
    const {LocalState, stateVar} = props;
    LocalState.setDefault(local_state_var, stateVar);

    const ApplicationManager = {
        applications: LocalState.get(stateVar)
    }

    onData(null, { ApplicationManager });
}

const depsMapper = (props, actions) => ({
    actions: actions.localStateActions
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
