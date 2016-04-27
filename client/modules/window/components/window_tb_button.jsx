// ----- External Imports ----- //
import React from 'react';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';

// ----- Library Imports ----- //
import cancelBubble from '../lib/cancel_bubble.js';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        float: 'right',

        width: 'auto',
        height: 'auto',
        marginRight: 2,
        padding: 1,

        cursor: 'pointer',

        fontSize: 10,

        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20
    }
});

const WindowTitleBarButton = (props) => {
    const classes = cx(stylesheet.default,
                       Themes.Default.primary_colors,
                       Themes.Default.primary_colors_hover,
                       props.focused && Themes.Default.primary_colors_focus);

   return (
        <div
            className={classes}
            onMouseDown={cancelBubble}
            onClick={props.onClick}
        >
            <FontAwesome
                name={props.faname}
                fixedWidth={true}
            />
        </div>
    );
};

export default WindowTitleBarButton;
