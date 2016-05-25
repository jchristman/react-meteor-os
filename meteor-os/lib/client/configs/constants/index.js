'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var prefix = '_meteor_os_constants';
var make = function make(_key, data) {
    return _.object(_.map(data, function (val, key) {
        return [key, prefix + '_' + _key + '_' + val];
    }));
};

// Generate an object of Content Types
var _ContentTypes = {
    Component: 'component',
    Text: 'text'
};
var ContentTypes = exports.ContentTypes = make('contenttypes', _ContentTypes);

// Generate an object of Window Leaf Pane Types
var _LeafTypes = {
    Plain: 'plain',
    Tabbed: 'tabbed'
};
var LeafTypes = exports.LeafTypes = make('leaftypes', _LeafTypes);