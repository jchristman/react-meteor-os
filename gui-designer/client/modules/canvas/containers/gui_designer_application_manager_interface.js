import {composeWithTracker} from 'react-komposer';
import {Components} from 'meteor-os';
import {Tracker} from 'meteor/tracker';

const {ApplicationManager} = Components;

const composer = (props, onData) => {
    const {LocalState, CurrentApp} = props;
    const AppsStateVar = '_gui_designer_apps';
    
    LocalState.set(AppsStateVar, [LocalState.get(CurrentApp)]);

    Tracker.autorun((handle) => {
        const app = LocalState.get(AppsStateVar)[0];
        LocalState.set(CurrentApp, app);
    });

    onData(null, { wrapper: 'state', stateVar: AppsStateVar });
}

export default composeWithTracker(composer)(ApplicationManager);
