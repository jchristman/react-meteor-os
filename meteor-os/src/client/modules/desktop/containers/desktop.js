import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Desktop from '../components/desktop.jsx';

const composer = (props, onData) => {
    onData(null, {});
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Desktop);
