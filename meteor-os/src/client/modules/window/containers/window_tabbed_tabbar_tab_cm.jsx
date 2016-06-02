import ContextMenu from 'react-context-menus';
import FontAwesome from 'react-fontawesome';

import WindowTabbedTabbarTab from '../components/window_tabbed_tabbar_tab.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const items = (props) => {
    return [
        {
            label: ( <span><FontAwesome name='edit'/>&nbsp;&nbsp;Rename</span> ),
            onClick: () => props.setEditing(true)
        }
    ];
}

const options = {
    container: {
        zIndex: 3
    }
}

export default ContextMenu(items, options)(WindowTabbedTabbarTab);
