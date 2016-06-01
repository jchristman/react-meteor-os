import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import WindowTabbed from '../components/window_tabbed.jsx';

const tabChecked = (props) => props.path + '_tab_checked';

const composer = (props, onData) => {
    const {LocalState} = props.context();
    LocalState.setDefault(tabChecked(props), 0);
    
    const check = (index) => LocalState.set(tabChecked(props), index);
    let checked = LocalState.get(tabChecked(props));
    if (checked >= props.content.length) checked = props.content.length - 1;
    if (checked < 0) checked = 0;
    onData(null, { checked, check });
}

const depsMapper = (context) => {
    return {
        context: () => context
    };
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(WindowTabbed);
