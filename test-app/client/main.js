// This is the main entry point for the application.
import { Client } from 'meteor-os';
import apps from '/lib/applications';

os = new Client.MeteorOS();
os.register(apps);
os.boot();
