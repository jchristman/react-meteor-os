import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';

import ApplicationManager from './wrapper.js';

const composer = (props, onData) => {
    const {LocalState, stateVar} = props;

    const ApplicationManager = {
        applications: LocalState.get(stateVar)
    }

    onData(null, { ApplicationManager });
}

const depsMapper = (props, actions) => actions.localStateActions;

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
