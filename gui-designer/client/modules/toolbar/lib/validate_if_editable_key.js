import editable_keys from '../configs/editable_keys.js';

export default (path) => _.reduce(editable_keys, (memo, regex) => {
    console.log(path, regex, path.match(regex));
    return memo || ( path.match(regex) !== null )
}, false);
