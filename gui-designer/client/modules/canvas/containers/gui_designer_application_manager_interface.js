import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {Components} from 'meteor-os';

const {ApplicationManager} = Components;

const composer = (context, onData) => {
    const {LocalState, CurrentApp, AppsStateVar} = context;
    
    // This is reactive so that if we change something in the designer the GUI updates
    LocalState.set(AppsStateVar, [LocalState.get(CurrentApp)]);
    Tracker.autorun(() => {
        // This is reactive so that if we change something in the GUI the designer updates
        LocalState.set(CurrentApp, LocalState.get(AppsStateVar)[0]);
    });

    onData(null, { wrapper: 'state', stateVar: AppsStateVar });
}

const depsMapper = (context) => {
    const {LocalState, CurrentApp} = context;
    const AppsStateVar = '_gui_designer_apps';

    return {
        AppsStateVar,
        ...context
    }
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper),
)(ApplicationManager);
