export default function(props) {
    const {Meteor} = props;
    let ready = Meteor.subscribe(props.collection_pub).ready();
    return ready;
}
