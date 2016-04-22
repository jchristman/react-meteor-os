export default (props, _window, top, left, width, height) => {
    const {updateWindowPosition} = props.actions;
    const windowPath = props.index + '.windows.' + _window.index + '.position';
    updateWindowPosition(windowPath, top, left, width, height);
}
