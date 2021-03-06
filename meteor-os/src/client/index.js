import ApplicationManagerModule from './modules/application_manager';
import WindowManagerModule from './modules/window_manager';
import WindowModule from './modules/window';

export const Modules = {
    ApplicationManagerModule,
    WindowManagerModule,
    WindowModule
}

import ApplicationManager from './modules/application_manager/components/application_manager_wrapper.jsx';
import Window from './modules/window/components/window.jsx';

export const Components = {
    ApplicationManager,
    Window
}

import * as Constants from './configs/constants';
export { Constants };
