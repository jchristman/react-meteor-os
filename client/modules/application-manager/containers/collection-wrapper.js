import {composeWithTracker, composeAll} from 'react-komposer';
import {useDeps} from 'mantra-core';
import ApplicationManager from './wrapper.js';
import ApplicationManagerSub from '../lib/application-manager-sub.js';

const composer = (context, onData) => {
    const {Collections} = context;
    let manager = { applications: [] }

    const ready = ApplicationManagerSub(context);
    if (ready) manager = Collections.ApplicationManager.findOne({ userId: 'asdf' }); // TODO: replace with Meteor.user()

    onData(null, { ApplicationManager: manager });
}

const depsMapper = (context, actions) => ({
    actions: actions.collectionActions
})

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ApplicationManager);
