import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import WindowTabbed from '../components/window_tabbed.jsx';

import getWindowTabCheckedKey from '../lib/get_window_tab_checked_key.js';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    LocalState.setDefault(getWindowTabCheckedKey(props), 0);
    const check = (index) => LocalState.set(getWindowTabCheckedKey(props), index);
    onData(null, { checked: LocalState.get(getWindowTabCheckedKey(props)), check });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(WindowTabbed);
