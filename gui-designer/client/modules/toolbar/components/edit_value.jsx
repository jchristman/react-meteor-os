import React from 'react';
import ReactDOM from 'react-dom';

import set_node from '../lib/set_node.js';

const stylesheet = cssInJS({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        width: '100%',
        height: '100%',
    },

    input: {
        flexGrow: 1,
        fontSize: 'large',
        marginRight: 5,
        marginLeft: 5
    }
});

class EditValue extends React.Component {
    inputChanged(event) {
        const {LocalState, CurrentApp} = this.props;

        let value = event.target.value;
        if (event.target.type === 'number') value = parseInt(event.target.value);

        const current = LocalState.get(CurrentApp);
        set_node(this.props.path, current, value);
        LocalState.set(CurrentApp, current);
    }

    render() {
        let type = 'text';
        if (typeof this.props.value === 'number') type = 'number';

        return (
            <div className={stylesheet.default}>
                <input
                    type={type}
                    className={stylesheet.input}
                    value={this.props.value}
                    onChange={this.inputChanged.bind(this)}/>
            </div>
        );
    }
}

export default EditValue;
