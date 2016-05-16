import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import cx from 'classnames';

import EditValue from './edit_value.jsx';

import validate_editable from '../lib/validate_if_editable_key.js';

const stylesheet = cssInJS({
    noneditable: {
        color: 'black'
    },

    editable: {
        cursor: 'pointer',

        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
        }
    }
});

const editValueModalStyle = (props) => { 
    const height = 40,
          width = 'auto';
    return {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 9999999
        },

        content: {
            position: 'absolute',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 5,
            paddingRight: 5,
            top: props.clickY - (height / 2),
            right: window.innerWidth - props.clickX + 50,
            left: 'auto',
            bottom: 'auto',
            height: height,
            width: width,
            border: '1px solid #ccc',
            borderRadius: 4,
            background: 'white',
            zIndex: 10000000
        }
} };

class PartLabel extends React.Component {
    editValueModal(event) {
        const {LocalState, EditValueModal, EditValueModalX, EditValueModalY} = this.props;
        LocalState.set(EditValueModal, true);
        LocalState.set(EditValueModalX, event.clientX);
        LocalState.set(EditValueModalY, event.clientY);

        event.preventDefault();
        event.stopPropagation();
    }

    closeEditValueModal() {
        const {LocalState, EditValueModal} = this.props;
        LocalState.set(EditValueModal, false);
    }

    onAfterOpen() {
        const input = ReactDOM.findDOMNode(this.refs._gui_designer_edit_value).getElementsByTagName('input')[0];
        if (input) {
            input.select();
            input.focus();
        }
    }

    render() {
        const {props} = this;
        const editable = validate_editable(props.path);
        const classes = cx(editable ? stylesheet.editable : stylesheet.noneditable);
        return (
            <strong
                className={classes}
                onClick={editable && this.editValueModal.bind(this)}
            >
                {props.node}
                
                { editable ?
                    <Modal
                        isOpen={props.editValueModalIsOpen}
                        onAfterOpen={this.onAfterOpen.bind(this)}
                        onRequestClose={this.closeEditValueModal.bind(this)}
                        style={editValueModalStyle(props)}>
                        <EditValue
                            ref='_gui_designer_edit_value'
                            closeModal={this.closeEditValueModal.bind(this)}
                            {...props}/>
                    </Modal> :
                    null }
            </strong>
        );
    }
}

export default PartLabel;