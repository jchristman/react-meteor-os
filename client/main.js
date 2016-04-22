// This is the main entry point for the application.
import {createApp} from 'mantra-core';
import initContext from './configs/context';

// Load up the modules!
import windowModule from './modules/window';
import windowManagerModule from './modules/window_manager';
import applicationManagerModule from './modules/application_manager';
import testModule from './modules/_test';

// Initialize the context
const context = initContext();

// Create the app
const app = createApp(context);
app.loadModule(windowModule);
app.loadModule(windowManagerModule);
app.loadModule(applicationManagerModule);
app.loadModule(testModule);
app.init();
