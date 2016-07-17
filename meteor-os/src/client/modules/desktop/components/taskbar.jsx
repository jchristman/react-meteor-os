import React from 'react';
import FontAwesome from 'react-fontawesome';

import TaskbarStartMenu from '../containers/taskbar_start_menu.js';
import TaskbarTray from './taskbar_tray.jsx';

const Taskbar = (props) => {
    return (
        <div className={stylesheet.taskbar}>
            <div
                className={stylesheet.start_menu}
                onClick={props.toggleStartMenuOpen}>
                Applications&nbsp;&nbsp;&nbsp;<FontAwesome name='caret-up'/>
            </div>
            <TaskbarStartMenu open={props.startMenuOpen} apps={props.apps}/>

            <div className={stylesheet.dock}>

            </div>

            <div className={stylesheet.tray}>
                <TaskbarTray/>
            </div>
        </div>
    );
}

const stylesheet = cssInJS({
    taskbar: {
        position: 'absolute',
        top: 'calc(100% - 40px)',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#111111',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    start_menu: {
        height: '100%',
        width: 150,

        color: '#EEEEEE',
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: '#EEEEEE',

        cursor: 'pointer',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        ':hover': {
            backgroundColor: '#222222'
        }
    },

    dock: {
        height: '100%',
        flex: '1 auto',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#EEEEEE',
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: '#EEEEEE'
    },

    tray: {
        height: '100%',
        width: 150,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#EEEEEE',
    }
});

export default Taskbar;
