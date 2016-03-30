import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';
import ApplicationManager from '../components/application-manager.jsx';

const composer = (context, onData) => {
    onData(null, {});
}

const depsMapper = (context, actions) => actions.localStateActions;

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
