import React from 'react';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';

import default_window from '../../../configs/default_window.js';
import global_styles from '../../../configs/global-css.js';

import Partlist from '../containers/partlist.js';

const stylesheet = cssInJS({
    default: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'stretch',

        position: 'absolute',
        top: -2,
        right: -2,
        left: 'calc(100% - 300px)',
        bottom: -2,

        backgroundColor: 'white',

        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',

        zIndex: 999999
    },

    toolbar_buttons: {
        position: 'relative',
        width: '100%',
        marginTop: 10,
        textAlign: 'center'
    },

    toolbar_button: {
        width: '80%'
    }
});

class Toolbar extends React.Component {
    render() {
        const add_window_classes = cx(stylesheet.toolbar_button, global_styles.button, global_styles.button_success);
        return (
            <div className={stylesheet.default}>
                <div className={stylesheet.toolbar_buttons}>
                    <button
                        className={add_window_classes}
                        onClick={this.addWindow.bind(this)}>
                            Add Window&nbsp;&nbsp;<FontAwesome name='plus'/>
                    </button>
                </div>
        
                <Partlist {...this.props}/>
            </div>
        );
    }

    addWindow() {
        const {LocalState, CurrentApp} = this.props;
        const _app = LocalState.get(CurrentApp);
        if (_app.windows === undefined) _app.windows = [];

        const new_window = JSON.parse(JSON.stringify(default_window));
        new_window.position.top += 20 * _app.windows.length;
        new_window.position.left += 20 * _app.windows.length;

        _app.windows.push(new_window);

        LocalState.set(CurrentApp, _app);
    }
}

export default Toolbar;
