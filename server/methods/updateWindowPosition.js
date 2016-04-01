import {check, Match} from 'meteor/check';
import {ApplicationManager} from '/lib/collections.js';

export default () => {
    Meteor.methods({
        updateWindowPosition(path, top, left) {
            check(path, String);
            check(top, Match.Integer);
            check(left, Match.Integer);
            
            const current = ApplicationManager.findOne({ userId: 'asdf' }); // Replace with this.userId
            if (current) {
                const update = {};
                update[path] = { top, left };
                return ApplicationManager.update({ userId: current.userId }, { '$set': update });
            } else {
                throw new Meteor.Error('User not found!');
            }
        }
    });
}
