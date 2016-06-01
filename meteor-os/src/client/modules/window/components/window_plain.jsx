// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

import WindowContent from '../containers/window_content.js';

import Themes from '../../../configs/themes';

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
    return props.connectContextMenu(
        <div className={classes}>
            <WindowContent {..._.omit(props, 'connectContextMenu')}/>
        </div>
    );
}

export default WindowPlain;
