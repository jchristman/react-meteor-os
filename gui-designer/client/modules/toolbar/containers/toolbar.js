import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Toolbar from '../components/toolbar.jsx';

const composer = (context, onData) => {
    onData(null, {});
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Toolbar);
