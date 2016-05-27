import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Canvas from '../components/canvas.jsx';

const composer = (context, onData) => {
    onData(null, {});
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Canvas);
