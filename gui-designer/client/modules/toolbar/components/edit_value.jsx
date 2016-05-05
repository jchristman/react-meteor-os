import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

import get_node from '../lib/get_node.js';
import set_node from '../lib/set_node.js';

const stylesheet = cssInJS({
    default: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around'
    },

    input: {
        flexGrow: 6,
        fontSize: 'large'
    },

    button: {
        fontSize: 'large',
        cursor: 'pointer',

        ':disabled': {
            cursor: 'default'
        }
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

    shiftLeft() {
        const {LocalState, CurrentApp} = this.props;

        const current = LocalState.get(CurrentApp);
        let parentArray = get_node(this.props.path.split('.').slice(0,-1), current);
        let cur_node = parentArray.splice(this.props.node, 1)[0];
        parentArray.splice(this.props.node - 1, 0, cur_node);
        LocalState.set(CurrentApp, current);

        this.props.closeModal();
    }

    shiftRight() {
        const {LocalState, CurrentApp} = this.props;

        const current = LocalState.get(CurrentApp);
        let parentArray = get_node(this.props.path.split('.').slice(0,-1), current);
        let cur_node = parentArray.splice(this.props.node, 1)[0];
        parentArray.splice(this.props.node + 1, 0, cur_node);
        LocalState.set(CurrentApp, current);

        this.props.closeModal();
    }

    render() {
        const {LocalState, CurrentApp} = this.props;

        let type = null;
        if (typeof this.props.value === 'string') type = 'text';
        if (typeof this.props.value === 'number') type = 'number';

        let parentArray = get_node(this.props.path.split('.').slice(0,-1), LocalState.get(CurrentApp));
        let parentIsArray = Array.isArray(parentArray);
        let isFirst = parentIsArray && this.props.node === 0;
        let isLast = parentIsArray && this.props.node === parentArray.length - 1;

        return (
            <div className={stylesheet.default}>
                { type !== null ?
                    <input
                        type={type}
                        className={stylesheet.input}
                        value={this.props.value}
                        onChange={this.inputChanged.bind(this)}/> :
                    null }
                { parentIsArray ?
                    <button
                        className={stylesheet.button}
                        disabled={isFirst}
                        onClick={this.shiftLeft.bind(this)}>
                            <FontAwesome name='caret-square-o-up'/>
                    </button> : null }
                { parentIsArray ?
                    <button
                        className={stylesheet.button}
                        disabled={isLast}
                        onClick={this.shiftRight.bind(this)}>
                            <FontAwesome name='caret-square-o-down'/>
                    </button> : null }
            </div>
        );
    }
}

export default EditValue;
