import { Modules, Components, Constants } from './client/MeteorOS';
    
import CMeteorOS from './client/MeteorOS';
import SMeteorOS from './server/MeteorOS';

const Client = { MeteorOS: CMeteorOS };
const Server = { MeteorOS: SMeteorOS };

export { Modules, Components, Constants, Client, Server };
