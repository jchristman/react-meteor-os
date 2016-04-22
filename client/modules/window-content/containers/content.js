import {composeWithTracker} from 'react-komposer';

import WindowContent from '../components/content.jsx';

const composer = (props, onData) => {
    onData(null, {});
}

export default composeWithTracker(composer)(WindowContent);
