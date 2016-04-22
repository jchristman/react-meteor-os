import React from 'react';
import cx from 'classnames';
import cancelBubble from '../lib/cancelBubble.js';
import FontAwesome from 'react-fontawesome';

const stylesheet = cssInJS({
    default: {
        width: 'auto',
        height: 'auto',

        float: 'right',

        marginRight: 2,

        backgroundColor: '#D6D2D0',
        color: '#898688',
        cursor: 'pointer',

        fontSize: 10,

        padding: 1,
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
