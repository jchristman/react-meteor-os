import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Taskbar from '../components/taskbar.jsx';

const _start_menu_open = '_meteor_os_desktop_taskbar_start_menu_open_state';

const composer = (props, onData) => {
    const { Installed, LocalState } = props.context();
    LocalState.setDefault(_start_menu_open, false);

    const apps = Installed.Collection.findOne();
    const startMenuOpen = LocalState.get(_start_menu_open);
    const hideStartMenu = () => LocalState.set(_start_menu_open, false);
    const toggleStartMenuOpen = () => LocalState.set(_start_menu_open, !startMenuOpen);

    onData(null, { apps, startMenuOpen, hideStartMenu, toggleStartMenuOpen });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps()
)(Taskbar);
