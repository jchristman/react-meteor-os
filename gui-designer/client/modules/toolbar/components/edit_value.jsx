import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';
import {Random} from 'meteor/random';
import {Constants} from 'meteor-os';
import baconipsum from 'baconipsum';

import get_node from '../lib/get_node.js';
import set_node from '../lib/set_node.js';

import default_tab from '../../../configs/default_tab.js';

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
        const current = LocalState.get(CurrentApp);

        let value = event.target.value;
        if (event.target.type === 'number') value = parseInt(event.target.value);

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

    addTab() {
        const {LocalState, CurrentApp} = this.props;
        const current = LocalState.get(CurrentApp);

        let tabsArray = get_node(this.props.path, current);
        tabsArray.push(default_tab());
        LocalState.set(CurrentApp, current);
    }

    splitV() {
        this.split('vertical');
    }

    splitH() {
        this.split('horizontal');
    }

    split(orientation) {
        const {LocalState, CurrentApp} = this.props;
        const current = LocalState.get(CurrentApp);

        let layoutNode = get_node(this.props.path, current);
        let _content = layoutNode.content;
        let _type = layoutNode.type;
        delete layoutNode.content;
        delete layoutNode.type;

        layoutNode.panes = {
            orientation,
            percentage: 50,
            pane1: {
                _id: Random.id(),
                content: _content,
                type: _type
            },
            pane2: {
                _id: Random.id(),
                content: baconipsum(100),
                type: Constants.Types.Text
            }
        }
        LocalState.set(CurrentApp, current);
    }

    render() {
        const {LocalState, CurrentApp} = this.props;
        const current = LocalState.get(CurrentApp);

        let type = null;
        if (typeof this.props.value === 'string') type = 'text';
        if (typeof this.props.value === 'number') type = 'number';

        let parentArray = get_node(this.props.path.split('.').slice(0,-1), current);
        let parentIsArray = Array.isArray(parentArray);
        let isFirst = parentIsArray && this.props.node === 0;
        let isLast = parentIsArray && this.props.node === parentArray.length - 1;

        let addTabButton = false;
        let layoutSplitButton = false;
        let layoutSplitButtonDisabled = false;
        if (typeof this.props.value === 'object') {
            if (this.props.node === 'tabs') addTabButton = true;
            if (this.props.node === 'layout' || this.props.node === 'pane1' || this.props.node === 'pane2') {
                let layoutNode = get_node(this.props.path, current);
                layoutSplitButton = true;
                if (layoutNode.panes !== undefined)
                    layoutSplitButtonDisabled = true;
            }
        }

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
                { addTabButton ?
                    <button
                        className={stylesheet.button}
                        onClick={this.addTab.bind(this)}>
                            Create New Tab <FontAwesome name='plus'/>
                    </button> : null }
                { layoutSplitButton ?
                    <button
                        className={stylesheet.button}
                        disabled={layoutSplitButtonDisabled}
                        onClick={this.splitV.bind(this)}>
                            Split Vertical <FontAwesome name='arrows-v'/>
                    </button> : null }
                { layoutSplitButton ?
                    <button
                        className={stylesheet.button}
                        disabled={layoutSplitButtonDisabled}
                        onClick={this.splitH.bind(this)}>
                            Split Horizontal <FontAwesome name='arrows-h'/>
                    </button> : null }
            </div>
        );
    }
}

export default EditValue;
