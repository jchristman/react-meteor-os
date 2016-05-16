// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowContentPlain from './window_content_plain.jsx';
import WindowContentLayout from './window_content_layout.jsx';

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
    }
});

const typeSwitch = (props) => {
    if (props.tabs !== undefined && props.layout !== undefined) {
        return (
            <WindowContentLayout
                LocalState={props.LocalState}
                grabFocus={props.grabFocus}
                splitV={props.splitV}
                splitH={props.splitH}
                moveDivider={props.moveDivider}
                window_id={props.window_id}
                layer_id={props.layer_id}
                layout={props.layout}
                /> );
    } else {
        return (
            <WindowContentPlain
                content={props.content}
            /> );
    }
}

const WindowContent = (props) => {
    const classes = cx(stylesheet.default,
                       Themes.Default.primary_colors);
    const windowType = typeSwitch(props);
    return (
        <div className={classes}>
            {windowType}
        </div>
    );
}

export default WindowContent;
