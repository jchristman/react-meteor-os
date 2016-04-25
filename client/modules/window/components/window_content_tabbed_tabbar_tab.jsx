import React from 'react';
import cx from 'classnames';

import cancelBubble from '../lib/cancel_bubble.js';

const WindowContentTabbedTabbarTab = (props) => {
    console.log(props);
    const tab_classes = cx(stylesheet.tab, props.checked && stylesheet.tab_checked);
    const label_classes = cx(stylesheet.label, props.checked && stylesheet.label_checked);
    return (
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
        borderColor: '#898688',
        borderBottom: 'none',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        
        backgroundColor: '#D6D2D0',
        color: '#362922',
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
        cursor: 'pointer',

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
            borderColor: '#898688',

            borderBottomRightRadius: 6,
            boxShadow: '2px 2px 0 #D6D2D0'
        },

        ':after': {
            position: 'absolute',
            bottom: 0,
            right: -7,
            width: 6,
            height: 6,
            content: " ",

            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderStyle: 'solid',
            borderColor: '#898688',
            
            borderBottomLeftRadius: 6,
            boxShadow: '-2px 2px 0 #D6D2D0'
        },

        ':hover': {
            backgroundColor: '#EEEEEE',

            ':before': {
                boxShadow: '2px 2px 0 #EEEEEE'
            },

            ':after': {
                boxShadow: '-2px 2px 0 #EEEEEE'
            }
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
        },

        ':hover': {
            backgroundColor: 'white',

            ':before': {
                boxShadow: '2px 2px 0 white'
            },

            ':after': {
                boxShadow: '-2px 2px 0 white'
            }
        }
    }
});

export default WindowContentTabbedTabbarTab;
