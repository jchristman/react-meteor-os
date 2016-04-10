import { composeWithTracker } from 'react-komposer';
import windowTitleBarButtonsClose from '../components/window-titlebar.buttons.close.jsx';
import windowTitleBarButtonsMaximize from '../components/window-titlebar.buttons.maximize.jsx';
import windowTitleBarButtonsRestore from '../components/window-titlebar.buttons.restore.jsx';
import windowTitleBarButtonsMinimize from '../components/window-titlebar.buttons.minimize.jsx';

const composer = (props, onData) => {
    const {LocalState} = props;
    LocalState.setDefault(props.hoverVar, false);
    onData(null, { hover: LocalState.get(props.hoverVar) });
}

export const WindowTitleBarButtonsClose = composeWithTracker(composer)(windowTitleBarButtonsClose);
export const WindowTitleBarButtonsMaximize = composeWithTracker(composer)(windowTitleBarButtonsMaximize);
export const WindowTitleBarButtonsRestore = composeWithTracker(composer)(windowTitleBarButtonsRestore);
export const WindowTitleBarButtonsMinimize = composeWithTracker(composer)(windowTitleBarButtonsMinimize);
