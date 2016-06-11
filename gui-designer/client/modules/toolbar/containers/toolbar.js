import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Toolbar from '../components/toolbar.jsx';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    const _version = '_meteor_os_version';
    const _default = 'Loading version...';
    LocalState.setDefault(_version, _default);
    
    const v = LocalState.get(_version);
    if (v === _default) {
        Meteor.call('meteorOSVersion.get', (err, res) => {
            LocalState.set(_version, res);
        });
    }

    const version = v === _default ? `${v}` : `MeteorOS v${v}`;
    onData(null, { version });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Toolbar);
