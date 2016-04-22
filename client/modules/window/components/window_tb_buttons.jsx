import React from 'react';

import WindowTitleBarButton from './window_tb_button.jsx';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 3,
        right: 0,
        width: 'auto',
        height: 'auto'
    }
});

const getButtons = (props) => [
    {
        name: 'Close',
        faname: 'remove',
        onClick: props.closeWindow
    },
    {
        name: 'Restore',
        faname: 'share',
        onClick: props.restoreWindow
    },
    {
        name: 'Maximize',
        faname: 'chevron-up',
        onClick: props.maximizeWindow
    },
    {
        name: 'Minimize',
        faname: 'chevron-down',
        onClick: props.minimizeWindow
    }
];

const WindowTitleBarButtons = (props) => {
    const buttons = getButtons(props);
    return (
        <div className={stylesheet.default}>
            {buttons.map((button, index) => (
                <WindowTitleBarButton
                    key={index}
                    faname={button.faname}
                    focused={props.focused}
                    onClick={button.onClick}
                />
            ))}
        </div>
    );
};

export default WindowTitleBarButtons;
