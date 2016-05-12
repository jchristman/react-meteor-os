import React from 'react';
import cx from 'classnames';
import Modal from 'react-modal';

import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    leaf: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

const context_menu_style = (props) => {
    const height = 'auto',
          width = 'auto';
    return {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 9999999
        },

        content: {
            position: 'absolute',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 5,
            paddingRight: 5,
            top: 0,
            right: 0,
            left: 'auto',
            bottom: 'auto',
            height: height,
            width: width,
            border: '1px solid #ccc',
            borderRadius: 4,
            background: 'white',
            zIndex: 10000000
        }
    };
}

class WindowContentLayoutLeaf extends React.Component {
    render() {
        const {props} = this;

        const tabs = _.filter(props.tabs, (tab) => tab._id === props._id);
        const leaf_classes = cx(stylesheet.leaf, Themes.Default.secondary_colors);

        return (
            <div
                className={leaf_classes}
                onContextMenu={this.props.show_context_menu}
                >
            </div>
        );
    }
}

export default WindowContentLayoutLeaf;
