import baconipsum from 'baconipsum';
import {Constants} from 'meteor-os';

let count = 0;

export default () => {
    count += 1;
    return {
        data: baconipsum(100),
        type: Constants.ContentTypes.Text,
        label: `Tab ${count}`
    }
}
