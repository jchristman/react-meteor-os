import updateWindowPosition from './updateWindowPosition.js';
import updateWindowGrabFocus from './updateWindowGrabFocus.js';

// We call all of the individual functions that create Meteor method stubs
// because this is only called at the initial load.
export default function(context) {
    updateWindowGrabFocus();
    updateWindowPosition();
}
