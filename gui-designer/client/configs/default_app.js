import {Random} from 'meteor/random';

import default_window from './default_window.js';

export default {
    _id: Random.id(),
    name: 'APPLICATION NAME',
    package: 'Package.Path',
    unassigned_content: [],
    windows: [
        default_window()
    ]
}
