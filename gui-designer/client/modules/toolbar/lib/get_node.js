export default (path, obj) => {
    if (typeof path === 'string') path = path.split('.');
    return path.reduce((o,i)=>o[i], obj);
}
