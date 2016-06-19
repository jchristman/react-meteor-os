import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import { authComposer } from 'meteor-auth';

import AuthWrapper from '../components/auth_wrapper.jsx';

export const composer = ({context}, onData) => {
    const {Meteor} = context();
    Meteor.subscribe('accounts.currentUser').ready();
    onData(null, {});
};

const depsMapper = (context) => {
    console.log(context);
    return { context: () => context }
}

export default composeAll(
    composeWithTracker(authComposer),
    composeWithTracker(composer),
    useDeps(depsMapper)
)(AuthWrapper);
