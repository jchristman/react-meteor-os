import {check, Match} from 'meteor/check';

export default (context) => {
    const {ApplicationManager} = context.Collections;
    Meteor.methods({
        updateWindowGrabFocus(path, index) {
            check(path, String);
            check(index, Match.Integer);

            const current = ApplicationManager.findOne({ userId: 'asdf' }); // Replace with this.userId
            if (current) {
                let tmp = current;
                for (let val of path.split('.')) {
                    if (!isNaN(val)) val = Number(val);
                    tmp = tmp[val];
                }

                // Move the focused window to the end of the array
                let _window = tmp.splice(index, 1)[0];
                tmp.push(_window);
                
                // Move the layer to the end of the array
                let _layer = current.applications
                                .splice(Number(path.split('.')[1]), 1)[0];
                current.applications.push(_layer);

                const update = { applications : current.applications };
                return ApplicationManager.update({ userId: current.userId }, { '$set': update });
            } else {
                throw new Meteor.Error('User not found!');
            }
        }
    });
}
