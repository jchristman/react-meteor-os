import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

class MeteorOS {
    constructor() {
        this.applications = {};
        this.pub = 'MeteorOS.Applications';
    }

    add(apps) {
        _.each(apps, (app) => {
            const pkg = app.package.split('.');

            // This ensures that the structure exists in this.applications that can contain the application
            let path = [];
            _.each(pkg, (part) => {
                const parent = path.reduce((o,i)=>o[i], this.applications);
                if (parent[part] === undefined) {
                    parent[part] = {};
                }
                path.push(part);
            });

            let pack = pkg.reduce((o,i)=>o[i], this.applications);
            if (pack._applications === undefined) {
                pack._applications = {};
            }
            pack = pack._applications;
            if (pack[app._id] !== undefined) console.warn(`This app is already defined!! Check to make sure _id is not duplicated: ${app._id}`);
            pack[app._id] = app;
        });
    }

    boot() {
        Meteor.publish(this.pub, () => {
            console.log(`Current user: ${Meteor.user()}`);
            return self.applications;
        });
    }
}

export default MeteorOS;
