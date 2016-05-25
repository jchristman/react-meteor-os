const prefix = '_meteor_os_constants';


// Generate an object of Types
let _Types = {
    Component: 'component',
    Text: 'text'
}
export const Types = _.object(_.map(_Types, (val, key) => [key, prefix + '_types_' + val]));
