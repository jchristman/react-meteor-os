import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import initAppCollection from '../../../lib/initAppCollection.js';

export default function() {
    return {
        Meteor,
        FlowRouter,
        AppCollection: initAppCollection(),
        LocalState: new ReactiveDict('_meteor_os_local_state')
    };
}
