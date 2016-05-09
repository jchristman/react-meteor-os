// This is the main entry point for the application.
import {createApp} from 'mantra-core';
import initContext from './configs/context';

// Load up the modules!
import coreModule from './modules/core';
import {Modules} from 'meteor-os';

const {ApplicationManagerModule, WindowManagerModule, WindowModule} = Modules;

// Initialize the context
const context = initContext();

// Create the app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(ApplicationManagerModule);
app.loadModule(WindowManagerModule);
app.loadModule(WindowModule);
app.init();
