import ContextMenu from 'react-context-menus';
import FontAwesome from '../components/v_font_awesome.jsx';

import WindowTabbedTabbarTab from '../components/window_tabbed_tabbar_tab.jsx';

import {tabMoveType} from '../configs/drag_types.js';

const items = (props) => {
    return [
        {
            label: ( <span><FontAwesome name='edit'/>&nbsp;Rename</span> ),
            onClick: () => props.setEditing(true)
        },
        '-',
        {
            label: ( <span><FontAwesome name='close'/>&nbsp;Close This</span> ),
            onClick: () => props.actions.closeTab(props.path)
        },
        {
            label: ( <span><FontAwesome name='close'/>&nbsp;Close All But This</span> ),
            onClick: () => props.actions.closeAllTabsBut(props.path)
        },
        {
            label: ( <span><FontAwesome name='close'/>&nbsp;Close All</span> ),
            onClick: () => props.actions.closeAllTabs(props.path)
        }
    ];
}

const options = {
    container: {
        zIndex: 3
    }
}

export default ContextMenu(items, options)(WindowTabbedTabbarTab);
