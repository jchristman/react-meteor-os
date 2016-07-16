import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AppLoader from '../components/app_loader.jsx';
import Constants from '../../../../lib/MeteorOS.constants.js';

const composer = (props, onData) => {
    const { Meteor, LocalState } = props.context();
    const ready = Meteor.subscribe(Constants.Publication).ready();
    onData(null, { ready });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AppLoader);
