import ContextMenu from 'react-context-menus';
import FontAwesome from '../components/v_font_awesome.jsx';
import _ from 'underscore';

import WindowLayoutLeaf from './window_layout_leaf_drop.js';

import * as Constants from '../../../configs/constants';

const items = (props) => {
    const types = Object.keys(_.omit(Constants.LeafTypes, (val) => val === props.leaf_type));
    const unassigned_content = props.unassigned.map(content => content.label);
    return [
        {
            label: ( <span><FontAwesome name='arrows-v'/>&nbsp;Split Vertical</span> ),
            onClick: () => props.actions.splitPaneVertical(props.path)
        },
        {
            label: ( <span><FontAwesome name='arrows-h'/>&nbsp;Split Horizontal</span> ),
            onClick: () => props.actions.splitPaneHorizontal(props.path)
        },
        '-',
        {
            label: ( <span><FontAwesome name='folder-open'/>&nbsp;Open Content</span> ),
            items: unassigned_content.length > 0 ? unassigned_content.map((content, index) => {
                return {
                    label: content,
                    onClick: () => props.actions.openTab(props.path + '.content', index)
                }
            }) : [ { label: ( <span><FontAwesome name='exclamation-circle'/>&nbsp;No content is unassigned</span> ) } ],
            disabled: (props.leaf_type === Constants.LeafTypes.Plain && props.content.length >= 1)
        },
        {
            label: ( <span>Change Type</span> ),
            items: types.map(type => {
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
