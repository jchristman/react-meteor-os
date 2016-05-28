export default (props, _window, top, left, width, height) => {
    const {changePosition} = props.actions;
    const windowPath = props.index + '.windows.' + _window.index + '.position';
    changePosition(windowPath, top, left, width, height);
}
