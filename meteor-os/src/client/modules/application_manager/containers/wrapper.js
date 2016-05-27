import {composeWithTracker} from 'mantra-core';

import ApplicationManager from '../components/application_manager.jsx';

const composer = (props, onData) => {
    if (props.ApplicationManager.applications.length > 0) {
        const last = props.ApplicationManager
                     .applications.last()
                     .windows.last();
        if (last !== undefined) last.focused = true;
    }

    onData(null, {});
}

export default composeWithTracker(composer)(ApplicationManager);
