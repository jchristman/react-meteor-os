import React from 'react';
import cx from 'classnames';

import WindowContentTabbedTabbar from './window_content_tabbed_tabbar.jsx';
import WindowContentTabbedTabcontent from './window_content_tabbed_tabcontent.jsx';

import getWindowTabCheckedKey from '../lib/get_window_tab_checked_key.js';

const stylesheet = cssInJS({
    tabs: {
        position: 'relative',
        width: '100%',
        height: '100%',
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
                <WindowContentTabbedTabbar
                    changeChecked={this.updateSelectedTab.bind(this)}
                    content={props.content}
                />
                <WindowContentTabbedTabcontent
                    content={props.content}
                />
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
