import React from 'react';
import cx from 'classnames';

import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        padding: 5,

        backgroundColor: 'white',
        opacity: 0.9,

        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5
    }
});

const style = (props) => {
    let left = props.x, top = props.y;
    return {
        top,
        left
    }
}

const TabPreview = (props) => {
    const classes = cx(stylesheet.default, Themes.Default.primary_colors, Themes.Default.primary_colors_focus,
        Themes.Default.primary_font, Themes.Default.primary_font_size);
    const _style = style(props);
    if (_style.top === undefined || _style.left === undefined) return null;
    return (
        <div
            style={_style}
            className={classes}>
                {props.label}
        </div>
    );
}

export default TabPreview;
