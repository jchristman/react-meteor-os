export default (which, x, y, pos) => {
    const props = { which, x, y, position: pos };
    const position = {};
    switch(props.which) {
        case 'tl':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.x;
            break;
        case 't':
            position.width = props.position.width;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.position.left;
            break;
        case 'tr':
            position.width = props.x - props.position.left;
            position.height = props.position.height - props.y + props.position.top;
            position.top = props.y;
            position.left = props.position.left;
            break;
        case 'l':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.position.height;
            position.top = props.position.top;
            position.left = props.x;
            break;
        case 'r':
            position.width = props.x - props.position.left;
            position.height = props.position.height;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
        case 'bl':
            position.width = props.position.width - props.x + props.position.left;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.x;
            break;
        case 'b':
            position.width = props.position.width;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
        case 'br':
            position.width = props.x - props.position.left;
            position.height = props.y - props.position.top;
            position.top = props.position.top;
            position.left = props.position.left;
            break;
    }

    if (position.width < 0) {
        position.left = position.left + position.width;
        position.width = Math.abs(position.width);
    }

    if (position.height < 0) {
        position.top = position.top + position.height;
        position.height = Math.abs(position.height);
    }
    
    return position;
}
