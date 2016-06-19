import { Server } from 'meteor-os';
import Applications from '/lib/applications';

const os = new Server.MeteorOS();
os.add(Applications);
os.boot();
