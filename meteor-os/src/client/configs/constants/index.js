const prefix = '_meteor_os_constants';
const make = (_key, data) => _.object(_.map(data, (val, key) => [key, `${prefix}_${_key}_${val}`]));


// Generate an object of Content Types
let _ContentTypes = {
    Component: 'component',
    Text: 'text'
}
export const ContentTypes = make('contenttypes', _ContentTypes)


// Generate an object of Window Leaf Pane Types
let _LeafTypes = {
    Plain: 'plain',
    Tabbed: 'tabbed'
}
export const LeafTypes = make('leaftypes', _LeafTypes);
