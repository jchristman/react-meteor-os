//TODO: Window Index is bad here. Because changing order of windows will break it.
export default (props) => '_layer_' + props.parent_id + '_window_' + props.windowIndex + '_tab_checked';
