// This is the main entry point for the application.
import {createApp} from 'mantra-core';
import initContext from './configs/context';

// Load up the modules!
import coreModule from './modules/core';
import {Modules} from 'meteor-os';

// Initialize the context
const context = initContext();

// Create the app
const app = createApp(context);
_.each(Modules, (module) => app.loadModule(module));
app.loadModule(coreModule);
app.init();
