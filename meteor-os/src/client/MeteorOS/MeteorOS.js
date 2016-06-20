import {createApp} from 'mantra-core';
import initContext from './configs/context.js';

import CoreModule from '../modules/core';
import DesktopModule from '../modules/desktop';
import ApplicationManagerModule from '../modules/application_manager';
import WindowManagerModule from '../modules/window_manager';
import WindowModule from '../modules/window';

class MeteorOS {
    constructor() {
        this.context = initContext(); // Initialize the mantra app
        this.app = createApp(this.context);
        
        this.app.loadModule(CoreModule);
        this.app.loadModule(DesktopModule);
        this.app.loadModule(ApplicationManagerModule);
        this.app.loadModule(WindowManagerModule);
        this.app.loadModule(WindowModule);

        this.app.init();
    }

    boot() {
    }
}

export default MeteorOS;
