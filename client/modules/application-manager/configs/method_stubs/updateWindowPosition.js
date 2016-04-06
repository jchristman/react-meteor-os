import {check, Match} from 'meteor/check';
import {ApplicationManager} from '/lib/collections.js';

export default () => {
    Meteor.methods({
        updateWindowPosition(path, top, left, width, height) {
            check(path, String);
            check(top, Match.Integer);
            check(left, Match.Integer);
            check(width, Match.Integer);
            check(height, Match.Integer);

            const current = ApplicationManager.findOne({ userId: 'asdf' }); // Replace with this.userId
            if (current) {
                const update = {};
                update[path + '.top'] = top;
                update[path + '.left'] = left;
                update[path + '.width'] = width;
                update[path + '.height'] = height;
                return ApplicationManager.update({ userId: current.userId }, { '$set': update });
            } else {
                throw new Meteor.Error('User not found!');
            }
        }
    });
}
