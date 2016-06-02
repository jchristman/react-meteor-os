// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowTabbedTabbar from './window_tabbed_tabbar.jsx';
import WindowTabbedContent from '../containers/window_tabbed_tabcontent_drop.js';

const stylesheet = cssInJS({
    tabs: {
        position: 'relative',
        width: '100%',
        height: '100%',
        clear: 'both',
        marginLeft: 0,
        marginRight: 0
    }
});

const WindowTabbed = (props) => {
    return (
        <div className={stylesheet.tabs}>
            <WindowTabbedTabbar {...props}/>
            <WindowTabbedContent {...props}/>
        </div>
    );
}

export default WindowTabbed;
