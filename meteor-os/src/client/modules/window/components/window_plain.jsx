// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

import WindowContent from './window_content.jsx';

import Themes from '../../../configs/themes';
import optionalWrapper from '../lib/optional_wrapper.js';

const stylesheet = cssInJS({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'auto'
    }
});

const WindowPlain = (props) => {
    const classes = cx(stylesheet.container, Themes.Default.secondary_colors);
    const connectContextMenu = props.connectContextMenu || optionalWrapper;
    return connectContextMenu(
        <div className={classes}>
            <WindowContent {..._.omit(props, 'connectContextMenu')}/>
        </div>
    );
}

export default WindowPlain;
