import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AppLoader from '../components/app_loader.jsx';
import Constants from '../../../../lib/MeteorOS.constants.js';

const composer = (props, onData) => {
    const { Meteor, LocalState } = props.context();
    let ready = Meteor.subscribe(Constants.Installed.Publication).ready();
    let ready2 = Meteor.subscribe(Constants.Running.Publication).ready();
    onData(null, { ready });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AppLoader);
