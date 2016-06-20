import { Mongo } from 'meteor/mongo';

const AppCollection = 'MeteorOS.AppCollection'

export default function() {
    return new Mongo.Collection(AppCollection);
}
