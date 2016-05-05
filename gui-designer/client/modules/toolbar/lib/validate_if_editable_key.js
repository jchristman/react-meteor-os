import editable_keys from '../configs/editable_keys.js';

export default (path) => _.reduce(editable_keys, (memo, regex) => memo || regex.test(path), false);
