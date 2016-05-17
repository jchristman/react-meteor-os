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
    },
    
    // This is here because of Issue 530121 in chrome, which caused scrollbars to display incorrectly
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'scroll'
    }
});

class WindowContentLayoutLeaf extends React.Component {
    render() {
        const {props} = this;

        const tabs = _.filter(props.tabs, (tab) => tab._id === props._id);
        const leaf_classes = cx(stylesheet.leaf, Themes.Default.secondary_colors);

        return this.props.connectDropTarget(
            <div className={leaf_classes}>
                { 
                    props.connectContextMenu(
                        <div className={stylesheet.container}>
                            <div style={{display: 'inline-block', whiteSpace: 'nowrap'}}>Text text text text text text</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default WindowContentLayoutLeaf;
