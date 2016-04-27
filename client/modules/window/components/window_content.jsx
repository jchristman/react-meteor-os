// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowContentPlain from './window_content_plain.jsx';
import WindowContentTabbed from '../containers/window_content_tabbed.js';

// ----- Library Imports ----- //
import * as windowTypes from '/lib/windowTypes.js';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 25,
        right: 1,
        left: 1,
        bottom: 2,
        
        borderWidth: 1,
        borderStyle: 'inset',
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
    const classes = cx(stylesheet.default,
                       Themes.Default.secondary_colors);
    const windowType = typeSwitch(props);
    return (
        <div className={classes}>
            {windowType}
        </div>
    );
}

export default WindowContent;
