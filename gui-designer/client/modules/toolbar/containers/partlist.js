import {composeWithTracker} from 'react-komposer';

import Partlist from '../components/partlist.jsx';

const composer = (props, onData) => {
    const {LocalState, CurrentApp} = props;

    onData(null, { app: LocalState.get(CurrentApp) });
}

export default composeWithTracker(composer)(Partlist);
