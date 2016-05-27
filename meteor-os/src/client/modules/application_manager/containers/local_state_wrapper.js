import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import ApplicationManager from './wrapper.js';
import local_state_var from '../configs/local_state_var.js';

const composer = ({context, stateVar}, onData) => {
    const {LocalState} = context();

    // This is here so that the local state actions know which LocalState var to modify
    LocalState.setDefault(local_state_var, stateVar);

    const ApplicationManager = {
        applications: LocalState.get(stateVar)
    }

    onData(null, { ApplicationManager });
}

// Here we inject the application context and local state actions as dependencies into this container
const depsMapper = (context, actions) => ({
    actions: actions.localStateActions,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
