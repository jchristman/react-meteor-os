import {composeWithTracker} from 'react-komposer';

import WindowContentTabbed from '../components/window_content_tabbed.jsx';

import getWindowTabCheckedKey from '../lib/get_window_tab_checked_key.js';

const composer = (props, onData) => {
    const {LocalState} = props;

    LocalState.setDefault(getWindowTabCheckedKey(props), 0);

    _.each(props.content, (tab) => { tab.checked = false }); 
    props.content[LocalState.get(getWindowTabCheckedKey(props))].checked = true;

    onData(null, { checked: LocalState.get(getWindowTabCheckedKey(props)) });
}

export default composeWithTracker(composer)(WindowContentTabbed);
