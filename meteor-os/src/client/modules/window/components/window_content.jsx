import React from 'react';
import cx from 'classnames';

import * as Constants from '../../../configs/constants';

const stylesheet = cssInJS({
    prewrap: {
        whiteSpace: 'pre-wrap'
    },

    nowrap: {
        whiteSpace: 'nowrap'
    }
});

const type_switch = (props) => {
    switch(props.content_type) {
        case Constants.ContentTypes.Text:
            return props.content;
            break;
        case Constants.ContentTypes.Component:
            return `Unknown component: ${props.content}`;
            break;
        default:
            return `Unsupported content type: ${props.content_type}`;
    }
}

const WindowContent = (props) => {
    const classes = cx(
        (props.content_type === Constants.ContentTypes.Text && stylesheet.prewrap) || stylesheet.nowrap
    );
    return (
        <div className={classes}>
            {type_switch(props)}
        </div>
    );
}

export default WindowContent;
