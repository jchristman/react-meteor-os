import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Partlist from '../components/partlist.jsx';

const composer = ({context}, onData) => {
    const {LocalState, CurrentApp} = context();

    onData(null, { app: LocalState.get(CurrentApp) });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Partlist);
