export default function(context) {
    const {Meteor} = context;
    let ready = Meteor.subscribe('application-manager.publication').ready();
    return ready;
}
