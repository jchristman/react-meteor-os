import { Mongo } from 'meteor/mongo';

const Constants = {};

Constants.Installed = {};
Constants.Installed._Collection = 'MeteorOS.Installed.Collection';
Constants.Installed.Collection = new Mongo.Collection(Constants.Installed._Collection);
Constants.Installed.Publication = 'MeteorOS.Installed.Publication';

Constants.Running = {};
Constants.Running._Collection = 'MeteorOS.Running.Collection';
Constants.Running.Collection = new Mongo.Collection(Constants.Running._Collection);
Constants.Running.Publication = 'MeteorOS.Running.Publication';

export default Constants;
