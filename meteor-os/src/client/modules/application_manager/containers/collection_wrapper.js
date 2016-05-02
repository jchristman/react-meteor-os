import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';

import ApplicationManager from './wrapper.js';

import ApplicationManagerSub from '../lib/application_manager_sub.js';

const composer = (props, onData) => {
    const {Collections} = props;
    let manager = { applications: [] }

    const ready = ApplicationManagerSub(props);
    if (ready) manager = Collections.ApplicationManager.findOne({ userId: 'asdf' }); // TODO: replace with Meteor.user()

    onData(null, { ApplicationManager: manager });
}

const depsMapper = (props, actions) => ({
    actions: actions.collectionActions
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
