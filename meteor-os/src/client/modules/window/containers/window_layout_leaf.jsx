import ContextMenu from 'react-context-menus';
import FontAwesome from 'react-fontawesome';
import _ from 'underscore';

import WindowLayoutLeaf from './window_layout_leaf_drop.js';

import * as Constants from '../../../configs/constants';

const items = (props) => {
    const types = Object.keys(_.omit(Constants.LeafTypes, (val) => val === props.leaf_type));
    return [
        {
            label: ( <span><FontAwesome name='arrows-v'/>&nbsp;&nbsp;Split Vertical</span> ),
            onClick: () => props.actions.splitPaneVertical(props.path)
        },
        {
            label: ( <span><FontAwesome name='arrows-h'/>&nbsp;&nbsp;Split Horizontal</span> ),
            onClick: () => props.actions.splitPaneHorizontal(props.path)
        },
        '-',
        {
            label: ( <span>Change Type</span> ),
            items: types.map((type) => {
                return {
                    label: type,
                    onClick: () => props.actions.changeLeafType(props.path, Constants.LeafTypes[type])
                };
            })
        }
    ];
}

const options = {
    container: {
        zIndex: 3
    }
}

export default ContextMenu(items, options)(WindowLayoutLeaf);
