import React from 'react';

import WindowLayout from './window_layout.jsx';

import Themes from '../../../configs/themes';

const style = (props) => {
    const rect = props.parent.getBoundingClientRect();
    return {
        position: 'absolute',
        top: rect.top,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    }
}

const LayoutPreview = (props) => {
    const parent = props.parent.getBoundingClientRect();
    const {pointer} = props;

    if (pointer === null) return ( <div></div> );

    const panes = props.panes !== undefined ? props.panes : props.layout.panes;
    let percentage = panes.orientation === 'horizontal' ?
        (pointer.x - parent.left) / (parent.right - parent.left) * 100 :
        (pointer.y - parent.top) / (parent.bottom - parent.top) * 100;

    percentage = Math.max(Math.min(100, percentage), 0);

    const new_props = _.omit(props, ['panes']);
    if (props.panes === undefined) {
        new_props.layout.panes = _.extend({}, panes);
        new_props.layout.panes.percentage = percentage;
    } else {
        new_props.panes = _.extend({}, panes);
        new_props.panes.percentage = percentage;
    }

    return (
        <div
            style={style(props)}
            className={Themes.Default.primary_colors}>
            <WindowLayout {...new_props}/>
        </div>
    );
}

export default LayoutPreview;
