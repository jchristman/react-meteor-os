import get_node from './get_node.js';

export default (path, obj, val) => {
    path = path.split('.');
    get_node(path.slice(0,-1), obj)[path.slice(-1)] = val;
};
