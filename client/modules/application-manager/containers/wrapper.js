import {composeWithTracker} from 'react-komposer';
import ApplicationManager from '../components/application-manager.jsx';

const composer = (context, onData) => {
    if (context.ApplicationManager.applications.length > 0) {
        context.ApplicationManager
            .applications.last()
            .windows.last()
            .focused = true;
    }

    onData(null, {});
}

export default composeWithTracker(composer)(ApplicationManager);
