import { Mongo } from 'meteor/mongo';

const App = {};
App._Collection = 'MeteorOS.App.Collection';
App.Collection = new Mongo.Collection(App._Collection);
App.Publication = 'MeteorOS.App.Publication';

export default App;
