// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Library Imports ----- //
import cancelBubble from '../lib/cancel_bubble.js';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const WindowContentTabbedTabbarTab = (props) => {
    const {connectDragSource} = props;

    const tab_classes = cx(stylesheet.tab,
                           Themes.Default.primary_colors,
                           Themes.Default.primary_colors_focus,
                           props.checked && stylesheet.tab_checked);

    const label_classes = cx(stylesheet.label,
                             Themes.Default.primary_colors_pseudo,
                             !props.checked && Themes.Default.primary_box_shadow_pseudo,
                             !props.checked && Themes.Default.primary_colors_hover,
                             props.checked && stylesheet.label_checked);

    return connectDragSource(
        <div 
            className={tab_classes}>
            <div
                className={label_classes}
                onMouseDown={cancelBubble}
                onClick={() => props.changeChecked(props.index)}>
                    {props.label}
            </div>
        </div>
    );
}

const stylesheet = cssInJS({
    tab: {
        float: 'left',
        height: 'auto',
        width: 'auto',
        marginTop: 4,
        marginLeft: 4,

        borderWidth: 1,
        borderStyle: 'solid',
        borderBottom: 'none',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },

    tab_checked: {
        backgroundColor: 'white',
        zIndex: 2,
    },

    label: {
        position: 'relative',
        padding: 5,
        cursor: 'pointer',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,

        ':before': {
            position: 'absolute',
            bottom: 0,
            left: -7,
            width: 6,
            height: 6,
            content: " ",

            borderTopWidth: 0,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 0,
            borderStyle: 'solid',

            borderBottomRightRadius: 6,
        },

        ':after': {
            content: ' ',
            position: 'absolute',
            bottom: 0,
            right: -7,
            width: 6,
            height: 6,

            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderStyle: 'solid',
            
            borderBottomLeftRadius: 6,
        }
    },

    label_checked: {
        zIndex: 2,
        backgroundColor: 'white',

        ':before': {
            boxShadow: '2px 2px 0 white'
        },

        ':after': {
            boxShadow: '-2px 2px 0 white'
        }
    }
});

export default WindowContentTabbedTabbarTab;
