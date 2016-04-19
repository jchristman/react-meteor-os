import React from 'react';
import WindowTitleBarButton from './window-titlebar.buttons.button.jsx';

const buttonStylesheet = cssInJS({
    default: {
        float: 'right',
        marginTop: 2,
        marginRight: 1,
        marginBottom: 0,
        marginLeft: 0,
        width: 17,
        height: 17,
        background: '#ccc',
        borderWidth: 1,
        borderStyle: 'outset',
        borderColor: '#9B9DC9',
        cursor: 'pointer',

        ':hover': {
            background: '#ddd'
        }
    }
});

const getButtons = (props) => [
    {
        name: 'Close',
        classes: 'glyphicon glyphicon-remove',
        onClick: props.closeWindow
    },
    {
        name: 'Restore',
        classes: 'glyphicon glyphicon-share-alt',
        onClick: props.restoreWindow
    },
    {
        name: 'Maximize',
        classes: 'glyphicon glyphicon-plus',
        onClick: props.maximizeWindow
    },
    {
        name: 'Minimize',
        classes: 'glyphicon glyphicon-minus',
        onClick: props.minimizeWindow
    }
];

const WindowTitleBarButtons = (props) => {
    const buttons = getButtons(props);
    return (
        <div>
            {buttons.map((button, index) => (
                <WindowTitleBarButton
                    key={index}
                    classes={[buttonStylesheet.default, button.classes]}
                    position={button.position}
                    onClick={button.onClick}
                />
            ))}
        </div>
    );
};

export default WindowTitleBarButtons;
