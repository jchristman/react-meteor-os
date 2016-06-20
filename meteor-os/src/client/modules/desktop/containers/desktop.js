/*
 * For now, we are just keeping this all localstate. Will add pushing state to server
 * at a later date.
 **/

import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Desktop from '../components/desktop.jsx';

const runningApps = '_meteor_os_currently_running_apps';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    LocalState.setDefault(runningApps, []);

    let running = LocalState.get(runningApps);
    const open = (app) => LocalState.set(runningApps, running.push(app));

    onData(null, { running, open });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Desktop);
