import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Taskbar from '../components/taskbar.jsx';

const composer = (props, onData) => {
    const {AppCollection} = props.context();
    const apps = AppCollection.findOne();
    onData(null, { apps });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Taskbar);
