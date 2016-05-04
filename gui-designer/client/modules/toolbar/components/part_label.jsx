import React from 'react';
import Modal from 'react-modal';
import cx from 'classnames';

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
          width = 400;
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
            padding: 0,
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
    }

    closeEditValueModal() {
        const {LocalState, EditValueModal} = this.props;
        LocalState.set(EditValueModal, false);
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
                        onRequestClose={this.closeEditValueModal.bind(this)}
                        style={editValueModalStyle(props)}>
                            Test
                    </Modal> :
                    null }
            </strong>
        );
    }
}

export default PartLabel;
