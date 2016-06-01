import React from 'react';
import cx from 'classnames';

import * as Constants from '../../../configs/constants';

const type_switch = (props) => {
    switch(props.type) {
        case Constants.ContentTypes.Text:
            return props.content;
            break;
        case Constants.ContentTypes.Component:
            return `Unknown component: ${props.content}`;
            break;
        default:
            return `Unsupported content type: ${props.type}`;
    }
}

const WindowContent = (props) => {
    const classes = cx((props.type === Constants.ContentTypes.Text && stylesheet.prewrap) || stylesheet.nowrap);
                       
    return (
        <div className={classes}>
            { type_switch(props) }
        </div>
    );
}

const stylesheet = cssInJS({
    prewrap: {
        whiteSpace: 'pre-wrap'
    },

    nowrap: {
        whiteSpace: 'nowrap'
    }
});

export default WindowContent;
