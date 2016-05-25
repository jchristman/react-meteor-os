import React from 'react';

import * as Constants from '../../../configs/constants';

const stylesheet = cssInJS({
    default: {
        whiteSpace: 'pre-wrap'
    }
});

const type_switch = (props) => {
    switch(props.content_type) {
        case Constants.ContentTypes.Text:
            return props.content;
            break;
        case Constants.ContentTypes.Component:
            console.log('Component type');
            break;
        default:
            throw new Error(`Unsupported content type: ${props.type}`);
    }
}

const WindowContentLayoutLeafContent = (props) => {
    return (
        <div className={stylesheet.default}>
            {type_switch(props)}
        </div>
    );
}

export default WindowContentLayoutLeafContent;
