// ----- External Imports ----- //
import React from 'react';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowTitleBarIcon from './window_tb_icon.jsx';
import WindowTitleBarTitle from './window_tb_title.jsx';
import WindowTitleBarButtons from './window_tb_buttons.jsx';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 1,
        height: 24,
        overflow: 'hidden',
        cursor: 'move'
    }
});

const renderTitleBar = (props) => {
    const classes = cx(stylesheet.default, Themes.Default.primary_colors);
    return (
        <div className={classes}>
            <WindowTitleBarIcon {...props}/>
            <WindowTitleBarTitle title={props.title} focused={props.focused}/>
            <WindowTitleBarButtons {...props}/>
        </div>
    );
};

const WindowTitleBar = (props) => {
    return props.connectDragSource !== undefined ?
                props.connectDragSource(renderTitleBar(props)) :
                renderTitleBar(props)
};

export default WindowTitleBar;
