import {ApplicationManager} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function() {
    Meteor.publish('application-manager.publication', function() {
        let userId = 'asdf'; // TODO: Once authentication is added, replace this.
        return ApplicationManager.find({ userId });
    });
}
