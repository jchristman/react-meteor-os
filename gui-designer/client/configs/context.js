import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';

export default function() {
    return {
        Meteor,
        FlowRouter,
        LocalState: new ReactiveDict(),
        CurrentApp: '_gui_designer_current_app',
        LastGoodCode: '_gui_designer_last_good_code'
    };
}
