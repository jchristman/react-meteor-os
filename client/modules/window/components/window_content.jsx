import React from 'react';
import cx from 'classnames';

import WindowContentPlain from './window_content_plain.jsx';
import WindowContentTabbed from '../containers/window_content_tabbed.js';

import * as windowTypes from '/lib/windowTypes.js';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 25,
        right: 1,
        left: 1,
        bottom: 2,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'inset',
        borderColor: '#9B9DC9',
        borderBottom: 0,
        borderRadius: 4,
        overflow: 'hidden'
    }
});

const typeSwitch = (props) => {
    switch(props.type) {
        case windowTypes.tabbed:
            return (
                <WindowContentTabbed
                    LocalState={props.LocalState}
                    grabFocus={props.grabFocus}
                    window_id={props.window_id}
                    layer_id={props.layer_id}
                    content={props.content}
                /> );
        default:
            return (
                <WindowContentPlain
                    content={props.content}
                /> );
    }
}

const WindowContent = (props) => {
    const classes = cx(stylesheet.default);
    const windowType = typeSwitch(props);
    return (
        <div className={classes}>
            {windowType}
        </div>
    );
}

export default WindowContent;
