// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 2,
        left: 24,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
    }
});

const WindowTitleBarText = (props) => {
    const classes = cx(stylesheet.default,
                       Themes.Default.primary_colors,
                       Themes.Default.primary_text_shadow,
                       props.focused && Themes.Default.primary_colors_focus,
                       props.focused && Themes.Default.primary_text_shadow_focus);

    return (
        <div className={classes}>{props.title}</div>
    );
}

export default WindowTitleBarText;
