import ContextMenu from '../../context_menu/context_menu.jsx';
import FontAwesome from 'react-fontawesome';

import WindowContentLayoutLeaf from '../components/window_content_layout_leaf.jsx';

const items = [
    {
        label: ( <span><FontAwesome name='arrows-v'/>&nbsp;&nbsp;Split Vertical</span> ),
        onClick: (event, props, index) => { props.splitV(props.path) }
    },
    {
        label: ( <span><FontAwesome name='arrows-h'/>&nbsp;&nbsp;Split Horizontal</span> ),
        onClick: (event, props, index) => props.splitH(props.path)
    }
]

export default ContextMenu(items)(WindowContentLayoutLeaf);
