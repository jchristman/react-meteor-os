import {ApplicationManager} from '/lib/collections';
import apps from './test.js';

export default function() {
    if (!ApplicationManager.findOne()) {
        const userId = 'asdf';
        const data = { userId, applications: apps };
        ApplicationManager.insert(data);
    }
}
