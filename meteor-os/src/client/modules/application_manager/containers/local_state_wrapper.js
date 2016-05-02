import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';

import ApplicationManager from './wrapper.js';

const composer = (props, onData) => {
    onData(null, {});
}

const depsMapper = (props, actions) => actions.localStateActions;

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
