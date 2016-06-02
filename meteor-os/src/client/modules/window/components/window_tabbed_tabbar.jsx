// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowTabbedTabbarTab from '../containers/window_tabbed_tabbar_tab.js';
import UndraggableWindowTabbedTabbarTab from './window_tabbed_tabbar_tab.jsx';

const WindowTabbedTab = (props) => {
    const tabbar_classes = cx(stylesheet.tabbar);
    
    return (
        <div className={tabbar_classes}>
            {
                props.content.map((tab, index) => (
                    <WindowTabbedTabbarTab
                        key={index}
                        index={index}
                        actions={props.actions}
                        layer_id={props.layer_id}
                        window_id={props.window_id}
                        check={props.check}
                        checked={index === props.checked}
                        path={props.path + '.' + index}
                        label={tab.label}
                    />
                ))
            }
            {
                props.content.length === 0 ?
                    <UndraggableWindowTabbedTabbarTab
                        checked={true}
                        label={'+'}
                    /> :
                    null
            }
        </div>
    );
}

const stylesheet = cssInJS({
    tabbar: {
        position: 'relative',
        height: 32,
        width: '100%'
    }
});

export default WindowTabbedTab;
