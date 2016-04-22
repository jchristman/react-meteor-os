import React from 'react';
import cx from 'classnames';

import cancelBubble from '../lib/cancel_bubble.js';

const WindowContentTabbedTab = (props) => {
    const tab_classes = cx(stylesheet.tab, props.checked && stylesheet.tab_checked);
    const label_classes = cx(stylesheet.label, props.checked && stylesheet.label_checked);
    const content_classes = cx(stylesheet.content, props.checked && stylesheet.content_checked);
    
    return (
        <div className={tab_classes}
            onMouseDown={cancelBubble}
            onClick={props.changeChecked}>
            <div className={label_classes}>{props.label}</div>

            <div className={content_classes}>{props.content}</div>
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
        cursor: 'pointer',

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#898688',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        
        backgroundColor: '#D6D2D0',
        color: '#362922',

        ':hover': {
            backgroundColor: '#EEEEEE',
        }
    },

    tab_checked: {
        backgroundColor: 'white',
        zIndex: 2,

        ':hover': {
            backgroundColor: 'white'
        }
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
            ':before': {
                boxShadow: '2px 2px 0 white'
            },

            ':after': {
                boxShadow: '-2px 2px 0 white'
            }
        }
    },

    radio: {
        display: 'none'
    },

    content: {
        position: 'absolute',
        top: 32,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 10,
        backgroundColor: 'white',
        cursor: 'default',

        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: '#898688'
    },

    content_checked: {
        zIndex: 1
    }
});

export default WindowContentTabbedTab;
