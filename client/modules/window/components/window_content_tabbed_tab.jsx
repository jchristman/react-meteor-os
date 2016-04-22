import React from 'react';
import cx from 'classnames';

import cancelBubble from '../lib/cancel_bubble.js';

const stylesheet = cssInJS({
    tab: {
        float: 'left'
    },

    radio: {
        display: 'none'
    },

    tab_label: {
        position: 'relative',
        top: 5,
        left: 1,
        marginLeft: -1,
        padding: 5,
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        cursor: 'pointer',

        ':hover': {
            backgroundColor: '#dddddd'
        }
    },

    tab_label_checked: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'white',
        zIndex: 2,

        ':hover': {
            backgroundColor: 'white'
        }
    },

    content: {
        position: 'absolute',
        top: 28,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: '#cccccc'
    },

    content_checked: {
        zIndex: 1
    }
});

const WindowContentTabbedTab = (props) => {
    const label_classes = cx(stylesheet.tab_label, props.checked && stylesheet.tab_label_checked);
    const content_classes = cx(stylesheet.content, props.checked && stylesheet.content_checked);
    
    return (
        <div className={stylesheet.tab}>
            <label
                className={label_classes}
                onMouseDown={cancelBubble}
                onClick={props.changeChecked}>
                    {props.label}
            </label>

            <div className={content_classes}>{props.content}</div>
        </div>
    );
}

export default WindowContentTabbedTab;
