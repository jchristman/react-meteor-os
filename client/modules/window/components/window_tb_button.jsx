import React from 'react';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';

import cancelBubble from '../lib/cancel_bubble.js';

const stylesheet = cssInJS({
    default: {
        float: 'right',

        width: 'auto',
        height: 'auto',
        marginRight: 2,
        padding: 1,

        backgroundColor: '#D6D2D0',
        color: '#898688',
        cursor: 'pointer',

        fontSize: 10,

        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: '#898688',

        ':hover': {
            backgroundColor: '#EEEEEE',
            borderColor: '#362922'
        }
    },
        
    focused: {
        color: '#362922',
    }
});

const WindowTitleBarButton = (props) => {
    const classes = cx(stylesheet.default,
                       props.focused && stylesheet.focused);

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
