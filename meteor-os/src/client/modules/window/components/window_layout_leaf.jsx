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
    const passOn = _.pick(props, 'actions', 'content', 'connectContextMenu', 
        'window_id', 'layer_id', 'path');
    passOn.path = passOn.path + '.content';
                          
    switch(props.leaf_type) {
        case Constants.LeafTypes.Plain:
            if (props.content.length === 0) {
                passOn.content = 'No content assigned here. Right click to open...';
                passOn.type = Constants.ContentTypes.Text;
            } else {
                passOn.content = props.content[0].data;
                passOn.type = props.content[0].type;
            }
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
