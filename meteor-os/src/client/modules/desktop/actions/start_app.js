import Constants from '../../../../lib/MeteorOS.constants.js';

const start_app = (app) => {
    Meteor.call('startApplication', app, (err) => {
        if (err) console.log(err);
    });
}

export default startApp;
