import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

import Constants from '../../lib/MeteorOS.constants.js';

class MeteorOS {
    constructor() {
        this.App = Constants;
        const exists = this.App.Collection.findOne();
        if (exists === undefined) this.App.Collection.insert({});
    }

    add(apps) {
        const applications = this.App.Collection.findOne();
        
        _.each(apps, (_app) => {
            const app = _app.Definition;
            const pkg = app.package.split('.');

            // This ensures that the structure exists in this.applications that can contain the application
            let path = [];
            _.each(pkg, (part) => {
                const parent = path.reduce((o,i)=>o[i], applications);
                if (parent[part] === undefined) {
                    parent[part] = {};
                }
                path.push(part);
            });

            let pack = pkg.reduce((o,i)=>o[i], applications);
            if (pack._applications === undefined) {
                pack._applications = {};
            }
            pack = pack._applications;
            if (pack[app._id] !== undefined) console.warn(`This app is already defined!! Check to make sure _id is not duplicated: ${app._id}`);
            pack[app._id] = app;
        });

        this.App.Collection.update(applications._id, applications);
    }

    boot() {
        const self = this;
        Meteor.publish(this.App.Publication, function() {
            if (this.userId === undefined) return this.ready();
            return self.App.Collection.find();
        });
    }
}

export default MeteorOS;
