import updateWindowPosition from './update_window_position.js';
import updateWindowGrabFocus from './update_window_grab_focus.js';

// We call all of the individual functions that create Meteor method stubs
// because this is only called at the initial load.
export default function(context) {
    updateWindowGrabFocus();
    updateWindowPosition();
}
