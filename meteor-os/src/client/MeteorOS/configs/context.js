import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';

export default function() {
    return {
        Meteor,
        FlowRouter,
        LocalState: new ReactiveDict()
    };
}
