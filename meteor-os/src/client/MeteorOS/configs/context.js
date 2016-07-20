import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import Constants from '../../../lib/MeteorOS.constants.js';

export default function() {
    return {
        Meteor,
        FlowRouter,
        Installed: Constants.Installed,
        Running: Constants.Running,
        LocalState: new ReactiveDict('_meteor_os_local_state')
    };
}
