const formatPath = (path) => 'applications.' + path;

const updateWindowPosition = (context, path, top, left, width, height) => {
    path = formatPath(path);
    Meteor.call('updateWindowPosition', path, top, left, width, height, (err) => {
        if (err) console.log(err);
    });
}

const updateWindowGrabFocus = (context, layerIndex, windowIndex) => {
    let path = formatPath('' + layerIndex) + '.windows';
    Meteor.call('updateWindowGrabFocus', path, windowIndex, (err) => {
        if (err) console.log(err);
    });
}

export default { 
    updateWindowPosition,
    updateWindowGrabFocus
};
