import React from 'react';
import cx from 'classnames';

import WindowContentTabbedTab from './window_content_tabbed_tab.jsx';

import getWindowTabCheckedKey from '../lib/get_window_tab_checked_key.js';

const stylesheet = cssInJS({
    tabs: {
        position: 'relative',
        minHeight: 200,
        clear: 'both',
        marginLeft: 0,
        marginRight: 0
    }
});

class WindowContentTabbed extends React.Component {
    render() {
        const props = this.props;

        return (
            <div className={stylesheet.tabs}>
                {
                    props.content.map((tab, index) => {
                        return (
                            <WindowContentTabbedTab
                                key={index}
                                index={index}
                                changeChecked={this.updateSelectedTab.bind(this, index)}
                                {...tab}
                            />
                        );
                    })
                }
            </div>
        );
    }

    updateSelectedTab(index) {
        const {LocalState} = this.props;

        LocalState.set(getWindowTabCheckedKey(this.props), index);

        this.props.grabFocus();
    }
}

export default WindowContentTabbed;
