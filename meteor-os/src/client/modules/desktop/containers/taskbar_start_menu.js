import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import _ from 'underscore';

import TaskbarStartMenu from '../components/taskbar_start_menu.jsx';

_start_menu_path = '_meteor_os_start_menu_path';

const o_get = (obj, path) => {
    path = path.split('.');
    return path.reduce((o,i)=>o[i], obj);
}

const composer = (props, onData) => {
    const { Installed, Running, LocalState } = props.context();
    LocalState.setDefault(_start_menu_path, '');

    // ----- Path Logic ----- //
    const path = LocalState.get(_start_menu_path);
    const pushPath = (item) => {
        if (path === '') {
            LocalState.set(_start_menu_path, item);
            return;
        }
        LocalState.set(_start_menu_path, `${path}.${item}`);
    };
    const popPath = () => LocalState.set(_start_menu_path, path.substr(0, path.lastIndexOf('.')));
    // ----- End Path Logic ----- //
    
    // ----- Current Path Apps ----- //
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

    const _apps = cur._applications;
    if (_apps !== undefined) {
        items = items.concat(Object.keys(_apps)).map((item) => {
            return {
                _id: item,
                name: _apps[item].name,
                type: 'app'
            }
        });
    }
    // ----- End Current Path Apps ----- //
    
    const startApp = (_path) => {
        const app = o_get(Installed.Collection.findOne(), _path);
    }

    onData(null, { path, pushPath, popPath, items, startApp });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(TaskbarStartMenu);
