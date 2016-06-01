// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowTabbedTabbarTab from '../containers/window_tabbed_tabbar_tab.js';

const WindowTabbedTab = (props) => {
    const tabbar_classes = cx(stylesheet.tabbar, props.isOver && stylesheet.tabbar_drop_isover);
    
    return (
        <div className={tabbar_classes}>
            {
                props.label.map((label, index) => (
                    <WindowTabbedTabbarTab
                        key={index}
                        index={index}
                        layer_id={props.layer_id}
                        window_id={props.window_id}
                        check={props.check}
                        checked={index === props.checked}
                        label={label}
                    />
                ))
            }
        </div>
    );
}

const stylesheet = cssInJS({
    tabbar: {
        position: 'relative',
        height: 32,
        width: '100%'
    },

    tabbar_drop_isover: {
        ':before': {
            content: ' ',
            position: 'absolute',
            width: 'calc(100% - 4px)',
            height: 'calc(100% - 3px)',
            borderWidth: 2,
            borderBottomWidth: 3,
            borderStyle: 'solid',
            borderColor: 'green',
            zIndex: 999999
        }
    }
});

export default WindowTabbedTab;
