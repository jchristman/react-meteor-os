import {composeWithTracker} from 'react-komposer';
import {Components} from 'meteor-os';

const {ApplicationManager} = Components;

const composer = (props, onData) => {
    const {LocalState, CurrentApp} = props;
    const AppsStateVar = '_gui_designer_apps';
    
    LocalState.set(AppsStateVar, [LocalState.get(CurrentApp)]);

    onData(null, { wrapper: 'state', stateVar: AppsStateVar });
}

export default composeWithTracker(composer)(ApplicationManager);
