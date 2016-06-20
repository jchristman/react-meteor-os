import { Meteor } from 'meteor/meteor';
import _ from 'underscore';

import initAppCollection from '../../lib/initAppCollection.js';

class MeteorOS {
    constructor() {
        this.AppCollection = initAppCollection();
        const exists = this.AppCollection.findOne();
        if (exists === undefined) this.AppCollection.insert({});
        this.pub = 'MeteorOS.Applications';
    }

    add(apps) {
        const applications = this.AppCollection.findOne();
        
        _.each(apps, (app) => {
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

        this.AppCollection.update(applications._id, applications);
    }

    boot() {
        const self = this;
        Meteor.publish(this.pub, function() {
            if (this.userId === undefined) return this.ready();
            return self.AppCollection.find();
        });
    }
}

export default MeteorOS;
