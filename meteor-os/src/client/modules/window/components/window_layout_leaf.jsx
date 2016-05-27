import React from 'react';
import cx from 'classnames';
import Modal from 'react-modal';

import WindowContentPlain from './window_content_plain.jsx';
import WindowContentTabbed from './window_content_tabbed.jsx';

import * as Constants from '../../../configs/constants';
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

const leaf_type_switch = (props) => {
    switch(props.leaf_type) {
        case Constants.LeafTypes.Plain:
            return ( <WindowContentPlain {...props}/> );
        case Constants.LeafTypes.Tabbed:
            return ( <WindowContentTabbed {...props}/> );
        default:
            return `Unknown leaf type: ${props.leaf_type}`;
    }
}

const WindowLayoutLeaf = (props) => {
    const classes = cx(stylesheet.default, Themes.Default.secondary_colors);
    return props.connectDropTarget(
        <div className={classes}>
            { leaf_type_switch(props) }
        </div>
    );
}

export default WindowLayoutLeaf;
