import {Random} from 'meteor/random';

export default {
    _id: Random.id(),
    title: 'Window Title',
    position: {
        top: 10,
        left: 10,
        height: 400,
        width: 500
    },
    content: {
        type: 'tmp',
        content: [
        ]
    }
}
