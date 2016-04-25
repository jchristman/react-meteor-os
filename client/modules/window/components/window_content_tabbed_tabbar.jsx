import React from 'react';
import cx from 'classnames';

import WindowContentTabbedTabbarTab from './window_content_tabbed_tabbar_tab.jsx';

const WindowContentTabbedTab = (props) => {
    const tabbar_classes = cx(stylesheet.tabbar);
    
    return (
        <div className={tabbar_classes}>
            {
                props.content.map((tab, index) => (
                    <WindowContentTabbedTabbarTab
                        key={index}
                        index={index}
                        changeChecked={props.changeChecked}
                        {...tab}
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
    }
});

export default WindowContentTabbedTab;
