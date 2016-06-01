import {Random} from 'meteor/random';
import baconipsum from 'baconipsum';
import {Constants} from 'meteor-os';

export default () => ( {
    _id: Random.id(),
    title: 'Window Title',
    position: {
        top: 10,
        left: 10,
        height: 400,
        width: 500
    },
    layout: {
        content: [
            {
                data: baconipsum(100),
                type: Constants.ContentTypes.Text,
                label: 'Tab 1'
            },
            {
                data: baconipsum(100),
                type: Constants.ContentTypes.Text,
                label: 'Tab 2'
            }
        ],
        leaf_type: Constants.LeafTypes.Tabbed
    }
} );
