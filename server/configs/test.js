const test_window1 = {
    position: {
        top: 10,
        left: 10,
        height: 400,
        width: 500,
    },

    classes: [
        'focused'
    ]
};

const test_window2 = {
    position: {
        top: 10,
        left: 600,
        height: 400,
        width: 500
    },

    classes: [

    ]
};

const app1 = {
    name: 'Application 1',
    package: 'First.Package',
    windows: [
        test_window1,
        test_window2
    ]
};

const test_window3 = {
    position: {
        top: 100,
        left: 200,
        height: 400,
        width: 500
    },

    classes: [

    ]
};

const app2 = {
    name: 'Application 2',
    package: 'Second.Package',
    windows: [
        test_window3
    ]
};

export default [ app2, app1 ];
