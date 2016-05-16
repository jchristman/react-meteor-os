import React from 'react';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        backgroundColor: '#898688',
        borderRadius: 2
    }
});

const get_divider_position = (props) => {
    if (props.orientation === 'vertical') {
        return {
            top: 'calc(' + props.percentage + '% - 2px)',
            left: 5,
            right: 5,
            height: 4,
            cursor: 'ns-resize',
            zIndex: 1
        }
    } else {
        return {
            top: 5,
            left: 'calc(' + props.percentage + '% - 2px)',
            bottom: 5,
            width: 4,
            cursor: 'ew-resize',
            zIndex: 1
        }
    }
}

const WindowContentLayoutDivider = (props) => {
    return props.connectDragSource(
        <div
            className={stylesheet.default}
            style={get_divider_position(props)}
            >
        </div>
    );
}

export default WindowContentLayoutDivider;
