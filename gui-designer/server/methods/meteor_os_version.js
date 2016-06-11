import {Meteor} from 'meteor/meteor';
let pjson = require('../../node_modules/meteor-os/package.json');

export default () => {
    Meteor.methods({
        'meteorOSVersion.get' : () => {
            return pjson.version;
        }
    });
}
