import React from 'react';

import WindowContentLayoutLeaf from '../containers/window_content_layout_leaf.js';
import WindowContentLayoutDivider from './window_content_layout_divider.jsx';

const get_pane1_style = (orientation, percentage) => {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 'calc(100% - ' + percentage + '% + 4px)',
            zIndex: 2
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 'calc(100% - ' + percentage + '% + 4px)',
            bottom: 0,
            zIndex: 2
        };
    }
}

const get_pane2_style = (orientation, percentage) => {
    if (orientation === 'vertical') {
        return {
            position: 'absolute',
            top: 'calc(' + percentage + '% + 4px)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    } else {
        return {
            position: 'absolute',
            top: 0,
            left: 'calc(' + percentage + '% + 4px)',
            right: 0,
            bottom: 0,
            zIndex: 0
        };
    }
}

const WindowContentLayout = (props) => {
    const panes = props.panes || (props.layout && props.layout.panes);
    const path = props.path || (props.layout && 'layout');

    if (panes === undefined) { // Then we are a leaf!
        return ( <WindowContentLayoutLeaf {...props}/> );
    } else {
        const {orientation, percentage} = panes;
        return (
            <div>
                <div
                    style={get_pane1_style(orientation, percentage)}>
                        <WindowContentLayout
                            {...panes.pane1}
                            splitV={props.splitV}
                            splitH={props.splitH}
                            path={path + '.panes.pane1'}
                            LocalState={props.LocalState}/>
                </div>
                <WindowContentLayoutDivider
                    orientation={orientation}
                    percentage={percentage}/>
                <div
                    style={get_pane2_style(orientation, percentage)}>
                        <WindowContentLayout
                            {...panes.pane2}
                            splitV={props.splitV}
                            splitH={props.splitH}
                            path={path + '.panes.pane2'}
                            LocalState={props.LocalState}/>
                </div>
            </div>
        );
    }
}

export default WindowContentLayout
