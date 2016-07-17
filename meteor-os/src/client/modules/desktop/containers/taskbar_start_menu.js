import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import _ from 'underscore';

import TaskbarStartMenu from '../components/taskbar_start_menu.jsx';

_start_menu_path = '_meteor_os_start_menu_path';

const o_get = (obj, path) => {
    path = path.split('.');
    return path.reduce((o,i)=>o[i], obj);
}

const composer = (props, onData) => {
    const { LocalState } = props.context();
    LocalState.setDefault(_start_menu_path, '');

    const path = LocalState.get(_start_menu_path);
    const itemClick = (item) => console.log(item);

    let cur = props.apps;
    if (path !== '') {
        cur = o_get(cur, path);
    }
    
    let items = _.filter(Object.keys(cur), (item) => {
        return item !== '_id' && item !== '_applications';
    }).map((item) => {
        return {
            name: item,
            type: 'pkg'
        }  
    });

    if (cur._applications !== undefined) {
        items.concat(Object.keys(cur._applications)).map((item) => {
            return {
                name: item,
                type: 'app'
            }
        });
    }

    onData(null, { path, itemClick, items });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(TaskbarStartMenu);
