import {Random} from 'meteor/random';
import baconipsum from 'baconipsum';
import {Constants} from 'meteor-os';

import default_tab from './default_tab.js';

export default () => ( {
    _id: Random.id(),
    title: 'Window Title',
    position: {
        top: 10,
        left: 10,
        height: 400,
        width: 500
    },
    tabs: [
        default_tab()
    ],
    layout: {
        _id: Random.id(),
        type: Constants.Types.Text,
        content: baconipsum(100)
    }
} );
