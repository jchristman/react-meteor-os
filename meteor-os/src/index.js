import { Modules, Components, Constants } from './client';
    
import CMeteorOS from './client/MeteorOS';
import SMeteorOS from './server/MeteorOS';

const Client = { MeteorOS: CMeteorOS };
const Server = { MeteorOS: SMeteorOS };

export { Modules, Components, Constants, Client, Server };
