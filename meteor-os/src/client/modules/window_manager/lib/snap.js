import * as snap_limits from '../configs/snap_limits.js';

export default (props) => {
    let x = props.x,
        y = props.y,
        width = props.position.width,
        height = props.position.height;
    if (props.pointer !== null) {
        if (props.pointer.x <= snap_limits.limit || 
            props.pointer.x >= window.innerWidth - snap_limits.limit) {

            x = props.pointer.x <= snap_limits.limit ?
                0 : window.innerWidth / 2;
            width = window.innerWidth / 2;
            
            if (props.pointer.y <= window.innerHeight * snap_limits.middle) {
                y = 0;
                height = window.innerHeight / 2;
            } else if (props.pointer.y <= window.innerHeight * snap_limits.bottom) {
                y = 0;
                height = window.innerHeight;
            } else {
                y = window.innerHeight / 2;
                height = window.innerHeight / 2;
            }
        }
    }
    return { top: y, left: x, width, height };
}
