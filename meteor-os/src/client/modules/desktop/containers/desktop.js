/*
 * For now, we are just keeping this all localstate. Will add pushing state to server
 * at a later date.
 **/

import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Desktop from '../components/desktop.jsx';

const runningAppsStateVar = '_meteor_os_currently_running_apps';

const composer = (props, onData) => {
    const {LocalState, OS} = props.context();
    LocalState.setDefault(runningAppsStateVar, []);

    const open = (app) => LocalState.set(runningAppsStateVar, LocalState.get(runningAppsStateVar).push(app));

    onData(null, { runningAppsStateVar, open });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Desktop);
