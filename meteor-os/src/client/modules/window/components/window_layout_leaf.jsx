import React from 'react';
import cx from 'classnames';
import Modal from 'react-modal';
import _ from 'underscore';

import WindowPlain from './window_plain.jsx';
import WindowTabbed from '../containers/window_tabbed.js';

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
    const passOn = _.pick(props, '_id', 'content', 'content_type', 'label',
                          'connectContextMenu', 'window_id', 'layer_id');
    switch(props.leaf_type) {
        case Constants.LeafTypes.Plain:
            return ( <WindowPlain {...passOn}/> );
        case Constants.LeafTypes.Tabbed:
            return ( <WindowTabbed {...passOn}/> );
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
