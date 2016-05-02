import {composeWithTracker} from 'react-komposer';

import ApplicationManager from '../components/application_manager.jsx';

const composer = (props, onData) => {
    if (props.ApplicationManager.applications.length > 0) {
        props.ApplicationManager
            .applications.last()
            .windows.last()
            .focused = true;
    }

    onData(null, {});
}

export default composeWithTracker(composer)(ApplicationManager);
