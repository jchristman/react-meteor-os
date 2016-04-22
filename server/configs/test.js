import {Random} from 'meteor/random';
import * as windowTypes from '/lib/windowTypes.js';

const test_window1 = {
    _id: Random.id(),
    title: 'Application 1 Window 1',
    position: {
        top: 10,
        left: 10,
        height: 400,
        width: 500,
    },
    content: {
        type: windowTypes.plain
    }
};

const test_window2 = {
    _id: Random.id(),
    title: 'Application 1 Window 2',
    position: {
        top: 10,
        left: 600,
        height: 400,
        width: 500
    },
    content: {
        type: windowTypes.paned
    }
};

const app1 = {
    _id: Random.id(),

    name: 'Application 1',
    package: 'First.Package',
    windows: [
        test_window1,
        test_window2
    ]
};

const test_window3 = {
    _id: Random.id(),
    title: 'Application 2 Window 1',
    position: {
        top: 100,
        left: 200,
        height: 400,
        width: 500
    },
    content: {
        type: windowTypes.paned
    }
};

const app2 = {
    _id: Random.id(),

    name: 'Application 2',
    package: 'Second.Package',
    windows: [
        test_window3
    ]
};

export default [ app2, app1 ];
