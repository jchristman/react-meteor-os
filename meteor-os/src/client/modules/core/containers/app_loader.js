import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AppLoader from '../components/app_loader.jsx';

const composer = (props, onData) => {
    const { Meteor } = props.context();
    const ready = Meteor.subscribe('MeteorOS.Applications').ready();
    onData(null, { ready });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(AppLoader);
