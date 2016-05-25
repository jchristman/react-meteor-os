import React from 'react';
import cx from 'classnames';
import Modal from 'react-modal';

import WindowContentLayoutLeafContent from './window_content_layout_leaf_content.jsx';

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
        overflow: 'auto'
    }
});

class WindowContentLayoutLeaf extends React.Component {
    render() {
        const {props} = this;

        const leaf_classes = cx(stylesheet.leaf, Themes.Default.secondary_colors);

        const content = {
            content: props.content,
            content_type: props.content_type
        }

        return this.props.connectDropTarget(
            <div className={leaf_classes}>
                { 
                    props.connectContextMenu(
                        <div className={stylesheet.container}>
                            <WindowContentLayoutLeafContent {...content}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default WindowContentLayoutLeaf;
