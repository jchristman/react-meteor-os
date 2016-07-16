import {createApp} from 'mantra-core';
import initContext from './configs/context.js';

import CoreModule from '../modules/core';
import DesktopModule from '../modules/desktop';
import ApplicationManagerModule from '../modules/application_manager';
import WindowManagerModule from '../modules/window_manager';
import WindowModule from '../modules/window';

class MeteorOS {
    constructor() {
        // Let's build the context for the mantra application
        this.context = initContext();
        this.context.OS = this; // Add a reference to this so that the mantra containers can access get_component

        this.os = createApp(this.context);
        
        this.os.loadModule(CoreModule);
        this.os.loadModule(DesktopModule);
        this.os.loadModule(ApplicationManagerModule);
        this.os.loadModule(WindowManagerModule);
        this.os.loadModule(WindowModule);

        this.os.init();

        this.components = {}
    }

    register(apps) {
        _.each(apps, (app) => {
            this.components[app.name] = app;
        });
    }

    get_component(name) {
        return this.components[name];
    }

    boot() {
    }
}

export default MeteorOS;
